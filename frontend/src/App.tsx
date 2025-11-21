import SearchBar from './components/SearchBar'
import TitleSection from './components/TitleSection'
import WeatherCardList from './components/WeatherCardList'
import GlobalMap from './components/Globe'
import type { WeatherDto } from './types/WeatherDto'
import { useState } from 'react'

function App() {

  const backgroundColor = {
    backgroundColor: 'oklch(88.2% 0.059 254.128)',
    minHeight: '100vh'
  }

  const [weatherCards, setWeatherCards] = useState<WeatherDto[]>([])

  const addWeatherCard = (weather: WeatherDto) => {
    
    // No need to duplicate cards
    setWeatherCards(prev => 
      prev.some(w => w.name === weather.name) 
        ? prev : [...prev, weather])
  }

  return (
    <>
      <div className="App" style={backgroundColor}>
        <TitleSection />
        <SearchBar onFound={addWeatherCard}/>
        <WeatherCardList weatherCards={weatherCards}/>
        <GlobalMap />
      </div>
    </>
  )
}

export default App
