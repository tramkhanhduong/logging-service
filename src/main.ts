import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { SocketService } from './socket/socket.service';
import {ConfigService} from "@nestjs/config";
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.TCP,
      options: {
        port: 4000,
      },
    },
  );
  await app.listen();

}
bootstrap();
