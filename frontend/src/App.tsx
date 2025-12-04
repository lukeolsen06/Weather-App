import SearchBar from './components/SearchBar'
import TitleSection from './components/TitleSection'
import WeatherCardList from './components/WeatherCardList'
import GlobalMap from './components/GlobalMap'
import type { WeatherDto } from './types/WeatherDto'
import type { CoordinatePair } from './types/CoordinatePair'
import { useState } from 'react'
import bg from './assets/background.jpg';

function App() {

  const [weatherCards, setWeatherCards] = useState<WeatherDto[]>([])
  const [locationCoords, setLocationCoords] = useState<CoordinatePair[]>([])

  const addWeatherCard = (weather: WeatherDto) => {
   
    /* Do not duplicate cards. Only place new card and remove old one if current_time value  has changed, as this reveals new weather data.*/
    // Locations can share the same name, so have to check coordinates
    setWeatherCards(prev => {
      const existing = prev.find(w => 
        w.name === weather.name && 
        w.lat === weather.lat && 
        w.lon === weather.lon);

      const coordinates: CoordinatePair = {lat: parseInt(weather.lat, 10), lng: parseInt(weather.lon, 10), name: weather.name}
      // If no cards in list, add coordinates to globe and add card to list
      if (!existing) {
        addLocationCoord(coordinates)
        return [...prev, weather];
      }

      console.log(`Current time for ${weather.name} is ${weather.localtime}`)
      // If card name is in the list and the returned time matches, the data was gathered from cache. Don't duplicate
      if (existing.localtime === weather.localtime) {
        console.log("Found previous card, not updating list")
        return prev;
      }

      // At this point, the current times do not match, so this is a new weather instance. Re-render array, modifying in-place if location has same name
      // Don't need to add to globe because coordinates are already there
      return prev.map(w => 
        w.name === weather.name && 
        w.lat === weather.lat && 
        w.lon === weather.lon 
        ? weather 
        : w
      );
    });
  }

  const addLocationCoord = (coords: CoordinatePair) => {
    
    setLocationCoords(prev => {
      const exists = prev.some( 
        c => c.lat === coords.lat && c.lng === coords.lng
      );
      
      if (exists) return prev;

      return [...prev, coords]
    });
  }

  return (
    <>
      <div className="App min-h-screen bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${bg})`}}>
        <TitleSection />
        <SearchBar onFound={addWeatherCard}/>
        <WeatherCardList weatherCards={weatherCards}/>
        <GlobalMap locationCoords={locationCoords}/>
      </div>
    </>
  )
}

export default App
