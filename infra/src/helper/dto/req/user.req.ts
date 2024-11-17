import { IsNotEmpty, IsString } from 'class-validator';

export class UserReq {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  name: string;
  
  @IsNotEmpty()
  @IsString()
  email: string;
}