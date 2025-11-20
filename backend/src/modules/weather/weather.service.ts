import { Injectable, Logger, BadRequestException } from '@nestjs/common';;
import {WeatherResponseDto} from './weather.dto';
import axios from 'axios';


/**
 * Gather weather data from WeatherStack API based on query location
**/
@Injectable()
export class WeatherService {

  private readonly logger = new Logger(WeatherService.name);
  
  async getWeather(location: string): Promise<WeatherResponseDto> {
    
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

        return {
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
    }
    catch (error) {
      console.error('Weatherstack error:', error.response?.data)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      throw new BadRequestException(`Failed to gather weather info: ${errorMessage}`);
    }


  }
}
