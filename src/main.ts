import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Global validation pipe
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // strip unknown properties
      forbidNonWhitelisted: true, // throw error if unknown properties
      transform: true,            // auto-transform types
    }),
  );

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Student Management API')
    .setDescription(`
This NestJS project demonstrates a simple Student CRUD backend with One-to-One StudentProfile relationship using TypeORM + PostgreSQL.

Features:
• StudentsModule: Create and Delete students with their profiles
• StudentProfilesModule: Handles profile data linked to each student
• PostgreSQL database with TypeORM
• Validation using class-validator
• Swagger documentation for all endpoints
    `)
    .setVersion('1.0')
    .setTermsOfService('http://localhost:8080/terms')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Swagger available at http://localhost:8080/api

  await app.listen(process.env.PORT ?? 8080);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();