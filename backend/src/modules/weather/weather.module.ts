import { Module } from '@nestjs/common';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Import ConfigModule for environment variables
    ConfigModule
  ],
  controllers: [WeatherController],
  providers: [WeatherService],
  exports: [
    WeatherService
  ]
})
export class WeatherModule {}
