import { Controller, Get, Query, Param} from '@nestjs/common';
import { WeatherService } from './weather.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
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
  async getWeather(@Query('location') location: string): Promise<WeatherResponseDto> {
    return this.weatherService.getWeather(location);
  }
}
