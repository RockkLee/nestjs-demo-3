import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from '@infra/module/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();

// import { tempApp } from "@app/temp";
// import { User } from "@domain/entity/user";
// import { UserAppSvc } from "@app/app.svc/user.app.svc";

// console.log(tempApp);
// console.log(User);
// console.log(UserAppSvc);