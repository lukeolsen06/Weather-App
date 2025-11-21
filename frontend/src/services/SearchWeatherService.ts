import axios from 'axios';
import type { WeatherDto } from "../types/WeatherDto"
import { normalizeLocation } from '../utils/normalizeLocation';

class SearchWeatherService {
    constructor() {}

    async searchForWeather(location: string): Promise<WeatherDto> {

        const cleanLocation = normalizeLocation(location);
        console.log(`Normalized location: ${cleanLocation.value}`)

        // Fetch the Weather API data and gather info in response object
        try {
            const response = await axios.get<WeatherDto>(`${import.meta.env.VITE_BACKEND_URL}/weather?location=${cleanLocation.value}`)
            if (response.data) {
                console.log(`Received the full Response from the backend service: `, response)
            }
            return response.data
        }
        catch (error: any) {
            console.error('Error receiving weather data:', error);
            throw new Error(`Failed to received weather data: ${error.response?.data?.message || error.message}`);
        }
    }
}

export default new SearchWeatherService();