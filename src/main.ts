import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(
    AppModule.register({ driver: 'orm' }),
    // AppModule.register({ driver: 'in-memory' }),
  );
  await app.listen(process.env.PORT ?? 5002);
}
bootstrap();
