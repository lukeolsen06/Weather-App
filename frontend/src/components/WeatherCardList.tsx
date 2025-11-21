
import type { WeatherDto } from '../types/WeatherDto';
import WeatherCard from './WeatherCard';


interface WeatherCardProps {
    weatherCards: WeatherDto[]
}

const WeatherCardList = ({weatherCards}: WeatherCardProps) => {
  
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-2 mt-3 px-4">
            {weatherCards.map((weather) => <WeatherCard key={`${weather.name},${weather.lon}}`} weather={weather} />)}
        </div>
    )
}

export default WeatherCardList
