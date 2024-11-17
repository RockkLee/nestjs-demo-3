import { User } from "@domain/entity/user";
import { UserResp } from "@infra/helper/dto/resp/user.resp";
import { UserPo } from "@infra/po/user.po";

export class UserMapper {
  public static fromUserPo(userPo: UserPo): User {
    const user = new User();
    user.id = userPo.id;
    user.name = userPo.name;
    user.email = userPo.email;
    return user;
  }

  public static toUserPo(user: User): UserPo {
    const userPo = new UserPo();
    userPo.id = user.id;
    userPo.name = user.name;
    userPo.email = user.email;
    return userPo;
  }

  public static toUserResp(user: User): UserResp {
    const userResp = new UserResp();
    userResp.id = user.id;
    userResp.name = user.name;
    userResp.email = user.email;
    return userResp;
  }
}