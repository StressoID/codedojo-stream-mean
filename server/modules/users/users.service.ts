import {Component} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {UserSchema} from './user.schema';
import {User} from './user.interface';

@Component()
export class UsersService {
  constructor(@InjectModel(UserSchema) private readonly userModel: any) { }

  async findOne(params) {
    return await this.userModel.findOne(params).exec();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async create(user: User) {
    const createdUser = new this.userModel(user);
    return await createdUser.save();
  }
}