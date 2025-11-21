
import type { WeatherDto } from '../types/WeatherDto';
import WeatherCard from './WeatherCard';


interface WeatherCardProps {
    weatherCards: WeatherDto[]
}

const WeatherCardList = ({weatherCards}: WeatherCardProps) => {
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 p-2">
            {weatherCards.map((weather) => <WeatherCard key={weather.name} weather={weather} />)}
        </div>
    )
}

export default WeatherCardList
