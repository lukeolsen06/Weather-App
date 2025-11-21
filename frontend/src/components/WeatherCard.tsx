import type { WeatherDto } from '../types/WeatherDto';
import { Sun, Cloud, CloudRain, Snowflake, Haze } from "lucide-react"
import weatherIconMap from '../utils/weatherIconMap'

interface WeatherProps {
  weather: WeatherDto
}
// Will receive props containing JSON weather response object
const WeatherCard = ({ weather }: WeatherProps ) => {

  const condition = weather.weather_descriptions[0]
  console.log(`Condition for ${weather.name}: is ${condition}`)
  const icon = weatherIconMap[condition] ?? <Cloud className="w-12 h-12"></Cloud>

  return (
    <div>
      <div className="p-4 flex items-center justify-center">
          <div className="flex flex-col bg-white rounded-2xl p-4 w-full max-w-xs shadow">
              <div className="font-bold text-xl">{weather.name}</div>
              <div className="text-sm text-gray-500">{weather.country}</div>
              <div className="text-sm text-gray-500">{weather.current_time}</div>
              <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
              <div className="flex justify-center mb-2">{icon}</div>
              </div>
              <div className="flex flex-row items-center justify-center mt-6">
                <div className="font-medium text-4xl">{weather.temperature} °F</div>
                <div className="flex flex-col items-center ml-6">
                  <div>{weather.weather_descriptions[0]}</div>
                  <div className="mt-1">
                    <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                    <span className="text-sm font-light text-gray-500">Feels like: {weather.feelslike}</span>
                  </div>
                  <div>
                    <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                    <span className="text-sm font-light text-gray-500">Sunset: {weather.sunset}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-6">
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Wind</div>
                  <div className="text-sm text-gray-500">{weather.wind_speed}m/h</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">UV</div>
                  <div className="text-sm text-gray-500">{weather.uv_index}</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Humidity</div>
                  <div className="text-sm text-gray-500">{weather.humidity} %</div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-medium text-sm">Visibility</div>
                  <div className="text-sm text-gray-500">{weather.visibility} mi</div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default WeatherCard
