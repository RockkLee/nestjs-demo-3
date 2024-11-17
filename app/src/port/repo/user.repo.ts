import { User } from '@domain/entity/user';

export interface UserRepo {
  save(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  deleteById(id: string): Promise<void>;
  update(user: User): Promise<void>;
}
