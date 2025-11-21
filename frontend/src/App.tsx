import SearchBar from './components/SearchBar'
import TitleSection from './components/TitleSection'
import WeatherCardList from './components/WeatherCardList'
import type { WeatherDto } from './types/WeatherDto'
import { useState } from 'react'
import bg from './assets/background.jpg';

function App() {

  const [weatherCards, setWeatherCards] = useState<WeatherDto[]>([])

  const addWeatherCard = (weather: WeatherDto) => {
   
    /* Do not duplicate cards. Only place new card and remove old one if current_time value  has changed, as this reveals new weather data.*/
    
    // Locations can share the same name, so have to check coordinates
    setWeatherCards(prev => {
      const existing = prev.find(w => 
        w.name === weather.name && 
        w.lat === weather.lat && 
        w.lon === weather.lon);

      // If no cards in list, add
      if (!existing) {
        return [...prev, weather];
      }

      console.log(`Current time for ${weather.name} is ${weather.localtime}`)
      // If card name is in the list and the returned time matches, the data was gathered from cache. Don't duplicate
      if (existing.localtime === weather.localtime) {
        console.log("Found previous card, not updating list")
        return prev;
      }

      // At this point, the current times do not match, so this is a new weather instance. Re-render array, modifying in-place if location has same name
      return prev.map(w => 
        w.name === weather.name && 
        w.lat === weather.lat && 
        w.lon === weather.lon 
        ? weather 
        : w
      );
    });
  }

  return (
    <>
      <div className="App min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
        <TitleSection />
        <SearchBar onFound={addWeatherCard}/>
        <WeatherCardList weatherCards={weatherCards}/>
      </div>
    </>
  )
}

export default App
