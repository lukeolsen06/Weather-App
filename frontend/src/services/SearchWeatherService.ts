import axios from 'axios';
import type { WeatherDto } from "../types/WeatherDto"

class SearchWeatherService {
    constructor() {}

    async searchForWeather(location: string): Promise<WeatherDto> {
        try {
            const response = await axios.get<WeatherDto>(`${import.meta.env.VITE_BACKEND_URL}/weather?location=${location}`)
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