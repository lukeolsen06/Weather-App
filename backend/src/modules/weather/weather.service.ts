import { Injectable, Logger, BadRequestException, Inject } from '@nestjs/common';;
import { WeatherResponseDto } from './weather.dto';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import type { Cache } from 'cache-manager'
import axios from 'axios';


/**
 * Gather weather data from WeatherStack API based on query location
**/
@Injectable()
export class WeatherService {

  private readonly logger = new Logger(WeatherService.name);

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getWeather(location: string): Promise<WeatherResponseDto> {
    
    // Check to see if location is in cache. If it is, return its Dto values
    const value = await this.cacheManager.get<WeatherResponseDto>(location);
    if (value) {
      console.log(`Got weather data for ${value.name} from cache!`)
      return value
    }

    try {
      const response = await axios.get(`${process.env.WEATHERSTACK_URL}/current`, {
          params: {
            query: location,
            units: 'f',
            access_key: process.env.WEATHERSTACK_API_KEY,
          }
        });

        if (response.data) {
          console.log("Received data!")
        }
        
        const data = response.data

        // The weather info to return to frontend. Matches WeatherResponseDto
        const weather_info = {
          name: data.location.name,
          country: data.location.country,
          lat: data.location.lat,
          lon: data.location.lon,
          temperature: data.current.temperature,
          sunrise: data.current.astro.sunrise,
          sunset: data.current.astro.sunset,
          weather_descriptions: data.current.weather_descriptions,
          cloudcover: data.current.cloudcover,
          wind_speed: data.current.wind_speed,
          precip: data.current.precip,
          humidity: data.current.humidity,
          feelslike: data.current.feelslike,
          visibility: data.current.visibility,
          uv_index: data.current.uv_index
        }

        // Location has a TTL of 15 minutes in cache
        await this.cacheManager.set(location, weather_info);
        console.log(`Stored ${weather_info.name} in cache`)

        return weather_info
    }
    catch (error) {
      console.error('Weatherstack error:', error.response?.data)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new BadRequestException(`Failed to gather weather info: ${errorMessage}`);
    }


  }
}
