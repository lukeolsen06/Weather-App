import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')

  // Swagger documentation setup 
  const config = new DocumentBuilder() 
    .setTitle('Weather API') 
    .setDescription('Backend API for Palmetto Weather Application') 
    .setVersion('1.0') .addTag('weather', 'Weather details for a particular location on earth.') 
    .build(); 
  
  const document = SwaggerModule.createDocument(app, config); 
  SwaggerModule.setup('api/docs', app, document);
  
  const port = process.env.PORT || 3001;
  await app.listen(port);
  
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`API Documentation: http://localhost:${port}/api/docs`);
}

bootstrap();
