import { ApiProperty } from '@nestjs/swagger';

export class WeatherResponseDto {
    
    @ApiProperty()
    name!: string;

    @ApiProperty()
    country!: string;

    @ApiProperty()
    lat!: string;

    @ApiProperty()
    lon!: string;

    @ApiProperty()
    temperature!: number;

    @ApiProperty()
    sunrise!: string;

    @ApiProperty()
    sunset!: string;

    @ApiProperty()
    windSpeed!: number;

    @ApiProperty()
    precip!: number;

    @ApiProperty()
    humidity!: number;

    @ApiProperty()
    feelsLike: number;

    @ApiProperty()
    uv_index: number;


}