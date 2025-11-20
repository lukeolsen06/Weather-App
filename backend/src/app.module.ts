
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WeatherModule } from './modules/weather/weather.module';
import { CacheModule } from '@nestjs/cache-manager';
import { createKeyv } from '@keyv/redis';

@Module({

    imports: [
    // Configuration module - loads environment variables
        ConfigModule.forRoot({
            isGlobal: true, // Makes config available everywhere
            envFilePath: ['.env.local', '.env'], // Loads .env files in order
            ignoreEnvFile: false, // Don't ignore .env files
        }),

        CacheModule.registerAsync({
            useFactory: async () => ({
                stores: [createKeyv('redis://localhost:6379')],
                ttl: 15 * 60 * 1000 
            }),
            isGlobal: true
        }),

        WeatherModule
    ]
})
export class AppModule {}