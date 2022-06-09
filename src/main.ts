import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { start } from 'repl';
import { AppModule } from './app.module';

async function Start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('The logical part of the online store BookShop')
    .setDescription('Documentation REST API')
    .setVersion('1.0.0')
    .addTag('Book')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => console.log(`Server start on port = ${PORT}`));
}
Start();
