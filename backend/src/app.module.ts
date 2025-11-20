

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './modules/weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({

    imports: [
    // Configuration module - loads environment variables
        ConfigModule.forRoot({
            isGlobal: true, // Makes config available everywhere
            envFilePath: ['.env.local', '.env'], // Loads .env files in order
            ignoreEnvFile: false, // Don't ignore .env files
        }),

        CacheModule.register({
            isGlobal: true,
            ttl: 15 * 1000 * 60 // 15 minutes TTL for weather response data
        }),

        WeatherModule
    ]
})
export class AppModule {}