import { Controller, Get } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('weather')
  getHello(): string {
    return this.weatherService.getHello();
  }
}
