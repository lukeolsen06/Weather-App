import { Controller, Get, Query } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiTags, ApiParam } from '@nestjs/swagger';
import { WeatherResponseDto } from './weather.dto';

@ApiTags('weather') // Groups endpoints in Swagger documentation
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  /**
   * Example: GET /api/weather?location=Louisville
   */
  @Get('')
  @ApiOperation({summary: 'Retrieve current weather information from a location'})
  @ApiParam({ name: 'location', description: 'Location of where to retrieve weather. Can be by name, coordinates, or zip' })
  async getWeather(@Query('location') location: string): Promise<WeatherResponseDto> {
    return this.weatherService.getWeather(location);
  }
}
