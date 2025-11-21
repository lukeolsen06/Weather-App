import { useState } from 'react';
import SearchWeatherService from "../services/SearchWeatherService.ts";

const SearchBar = () => {

  const [searchLocation, setSearchLocation] = useState('')
  const [errMessage, setErrMessage] = useState('')

  const handleInputChange = (e: any) => {
    setSearchLocation(e.target.value)
  }
  const searchForWeather = async () => {

    setErrMessage('')
    
    try {
      const weather_info = await SearchWeatherService.searchForWeather(searchLocation)
      
      if (!weather_info?.name) {
        setErrMessage("No name for given location found. Please try a different one.")
      }
    
    } catch (err: any) {
        setErrMessage(err.message)
    }
  }

  return (
    <div>
        <div className="flex justify-center items-center mt-6 gap-2 w-full">
          <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-blue-600">
            <input id="location" 
              type="text" 
              placeholder="Enter a city name, coordinates, or zip code..."  
              className="w-80 sm:w-[28rem] grow bg-white py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6" 
              onChange={handleInputChange}
            />
          </div>
          <button 
            type="button" 
            className="hover:cursor-pointer rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50" 
            onClick={searchForWeather}
            disabled={!searchLocation.trim()}
            >
              Search
            </button>
            {errMessage && (
              <p className="text-red-600 text-sm mt-1">{errMessage}</p>
            )}
        </div>
    </div>
  )
}

export default SearchBar
