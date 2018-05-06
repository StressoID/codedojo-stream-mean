import { Component } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { User } from "../users/user.interface";


@Component()
export class AuthService {

  constructor(private usersService: UsersService) {
  }

  async getToken(userDto: User): Promise<User> {
    return await this.usersService.findOne({ username: userDto.username });
  }
}