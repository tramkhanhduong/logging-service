import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketService } from './socket/socket.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Initialize the WebSocket service
  const socketService = app.get(SocketService);
  await socketService.onModuleInit();

  await app.listen(3001);
}
bootstrap();
