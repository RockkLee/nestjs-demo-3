import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPo } from '@infra/po/user.po';
import { UserController } from '@infra/controller/user.controller';
import { UserAppSvc } from '@app/app.svc/user.app.svc';
import { UserRepoImpl } from '@infra/adapter/repo.impl/user.repo.impl';

@Module({
  imports: [TypeOrmModule.forFeature([UserPo])],
  controllers: [UserController],
  providers: [
    UserAppSvc,
    { provide: "UserRepo", useClass: UserRepoImpl },
  ],
})
export class UserModule {}
