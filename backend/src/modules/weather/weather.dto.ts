import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray } from 'class-validator'

export class WeatherResponseDto {
    
    @ApiProperty()
    @IsString()
    name!: string;

    @ApiProperty()
    @IsString()
    country!: string;

    @ApiProperty()
    @IsString()
    lat!: string;

    @ApiProperty()
    @IsString()
    lon!: string;

    @ApiProperty()
    @IsNumber()
    temperature!: number;

    @ApiProperty()
    @IsString()
    sunrise!: string;

    @ApiProperty()
    @IsString()
    sunset!: string;

    @ApiProperty()
    @IsNumber()
    wind_speed!: number;

    @ApiProperty()
    @IsNumber()
    precip!: number;

    @ApiProperty()
    @IsNumber()
    cloudcover!: number;

    @ApiProperty()
    @IsNumber()
    humidity!: number;

    @ApiProperty()
    @IsNumber()
    feelslike!: number;

    @ApiProperty()
    @IsNumber()
    uv_index!: number;

    @ApiProperty()
    @IsNumber()
    visibility!: number;

    @ApiProperty()
    @IsArray()
    weather_descriptions!: string[];


}