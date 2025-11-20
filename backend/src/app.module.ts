
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './modules/weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';
import * as redisStore from 'cache-manager-ioredis';

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
            store: redisStore as any,
            ttl: 15 * 60 * 1000, // 15 minutes TTL for weather response data
            host: '172.17.0.2',
            port: 6379,
        }),

        WeatherModule
    ]
})
export class AppModule {}