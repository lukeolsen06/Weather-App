import { Sun, Cloud, CloudRain, Snowflake, Haze, CloudFog, SunDim } from 'lucide-react'
import type { JSX } from 'react';

const weatherIconMap: Record<string, JSX.Element> = {
    "sunny": <Sun className="w-20 h-20 text-yellow-400" />,
    "clear": <Sun className="w-20 h-20 text-yellow-400" />,
    "partly Cloudy": <Cloud className="w-20 h-20 text-gray-300" />,
    "partly cloudy": <Cloud className="w-20 h-20 text-gray-300" />,
    "cloudy": <Cloud className="w-20 h-20 text-gray-400" />,
    "overcast": <Cloud className="w-20 h-20 text-gray-400" />,
    "rain": <CloudRain className="w-20 h-20 text-blue-400" />,
    "light rain": <CloudRain className="w-20 h-20 text-blue-400" />,
    "heavy rain": <CloudRain className="w-20 h-20 text-blue-600" />,
    "snow": <Snowflake className="w-20 h-20 text-blue-200" />,
    "haze": <Haze className="w-20 h-20 text-blue-200" />,
    "mist": <CloudFog className="w-20 h-20 text-blue-200"/>,
    "light snow": <Snowflake className="w-20 h-20 text-blue-200" />,
    "Clear": <SunDim className="w-20 h-20 text-yellow-200"/>,

  };

export default weatherIconMap