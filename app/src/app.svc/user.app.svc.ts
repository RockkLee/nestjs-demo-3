import { UserDomainSvc } from '@domain/domain.svc/user.domain.svc';
import { UserRepo } from '@app/port/repo/user.repo';
import { User } from '@domain/entity/user';
import { Injectable, Inject, Optional } from '@nestjs/common';

@Injectable()
export class UserAppSvc {
  constructor(
    @Inject("UserRepo") private readonly userRepo: UserRepo,
    @Optional() private readonly userDomainSvc: UserDomainSvc = new UserDomainSvc(),
  ) {}

  public async createUser(name: string, email: string): Promise<User> {
    this.userDomainSvc.createUser();

    let user = new User();
    user.name = name;
    user.email = email;

    user = await this.userRepo.save(user);
    return user;
  }

  public async updateUser(userId: string, newName: string, newEmail: string): Promise<void> {
    this.userDomainSvc.updateUser();
    
    const user = await this.userRepo.findById(userId);
    if (!user)
      throw new Error('User not found');
    user.name = newName;
    user.email = newEmail;
    await this.userRepo.save(user);
  }

  public async deleteUser(userId: string): Promise<void> {
    this.userDomainSvc.deleteUser();
    const user = await this.userRepo.findById(userId);
    if (!user)
      throw new Error('User not found');
    await this.userRepo.deleteById(userId);
  }

  public async getUser(userId: string): Promise<User | null> {
    this.userDomainSvc.getUser();
    const user = await this.userRepo.findById(userId);
    if (!user)
      throw new Error('User not found');
    return user;
  }
}
