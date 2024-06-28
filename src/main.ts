import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Starting server...');
  console.log('Listening on port 4399');
  await app.listen(4399);
}
bootstrap();
