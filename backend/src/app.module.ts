

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './modules/weather/weather.module';

@Module({

    imports: [
    // Configuration module - loads environment variables
        ConfigModule.forRoot({
            isGlobal: true, // Makes config available everywhere
            envFilePath: ['.env.local', '.env'], // Loads .env files in order
            ignoreEnvFile: false, // Don't ignore .env files
        }),
        WeatherModule
    ]
})
export class AppModule {}