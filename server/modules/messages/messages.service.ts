import {Component} from '@nestjs/common';
import {InjectModel} from '@nestjs/mongoose';
import {MessageSchema} from './message.schema';

@Component()
export class MessagesService {
  constructor(@InjectModel(MessageSchema) private readonly messageModel: any) {}

  async findOne(params: string) {
    return await this.messageModel.findOne({params}).exec();
  }

  async findAll() {
    return await this.messageModel.find().exec();
  }

  async create(message) {
    console.log(message);
    const createdMessage = new this.messageModel(message);
    return await createdMessage.save();
  }
}