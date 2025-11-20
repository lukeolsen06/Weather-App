
export type WeatherDto = {
    
    name: string;

    country: string;

    lat: string;

    lon: string;

    temperature: number;

    sunrise: string;

    sunset: string;

    wind_speed: number;

    precip: number;

    cloudcover: number;

    humidity: number;

    feelslike: number;

    uv_index: number;

    visibility: number;

    weather_descriptions: string[];

}