import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiTags, ApiQuery } from '@nestjs/swagger';
import { WeatherResponseDto } from './weather.dto';

@ApiTags('weather') // Groups endpoints in Swagger documentation
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  /**
   * Example: GET /api/weather?location=Louisville
   */
  @Get()
  @ApiOperation({summary: 'Retrieve current weather information from a location'})
  @ApiQuery({ name: 'location', required: true, description: 'Location of where to retrieve weather (city, zip, or coordinates)', example: 'Charlotte' })
  async getWeather(@Query('location') location: string): Promise<WeatherResponseDto> {
    console.log('Received location', location)
    return this.weatherService.getWeather(location);
  }
}
