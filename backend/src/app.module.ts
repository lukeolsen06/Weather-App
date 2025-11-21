
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './modules/weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({

    imports: [
        // Configuration module - loads environment variables
        ConfigModule.forRoot({
            isGlobal: true, // Makes config available everywhere
            envFilePath: ['.env.local', '.env'], // Loads .env files in order
            ignoreEnvFile: false, // Don't ignore .env files
        }),

        // Use Redis store as cache, default to in-memory
        // TTL of 10 minutes
        CacheModule.registerAsync({
            useFactory: async () => ({
                stores: [createKeyv('redis://localhost:6379')], //This will be the Redis URI in production
                ttl: 1 * 60 * 1000
            }),
            isGlobal: true
        }),

        // Rate-limiting factor
        ThrottlerModule.forRoot({
            throttlers: [
                {
                    ttl: 60000,
                    limit: 25
                }
            ]
        }),
       
        WeatherModule
    
    ],
    
    providers: [ 
        {
            provide: APP_GUARD,
            useClass: ThrottlerGuard
        }
    ]


})
export class AppModule {}