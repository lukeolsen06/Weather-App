import { Sun, Cloud, CloudRain, Snowflake, Haze } from 'lucide-react'
import type { JSX } from 'react';

const weatherIconMap: Record<string, JSX.Element> = {
    "Sunny": <Sun className="w-20 h-20 text-yellow-400" />,
    "Clear": <Sun className="w-20 h-20 text-yellow-400" />,
    "Partly cloudy": <Cloud className="w-20 h-20 text-gray-300" />,
    "Cloudy": <Cloud className="w-20 h-20 text-gray-400" />,
    "Overcast": <Cloud className="w-20 h-20 text-gray-400" />,
    "Rain": <CloudRain className="w-20 h-20 text-blue-400" />,
    "Light rain": <CloudRain className="w-20 h-20 text-blue-400" />,
    "Heavy rain": <CloudRain className="w-20 h-20 text-blue-600" />,
    "Snow": <Snowflake className="w-20 h-20 text-blue-200" />,
    "Haze": <Haze className="w-20 h-20 text-blue-200" />
  };

export default weatherIconMap