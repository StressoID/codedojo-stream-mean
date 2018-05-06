import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './create-message.dto';
import { Message } from './message.interface';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {
  }

  @Post()
  public async create(@Body() createMessageDto: CreateMessageDto) {
    this.messagesService.create(createMessageDto);
  }

  @Get()
  public async findAll(): Promise<Message[]> {
    return await this.messagesService.findAll();
  }

  @Get(':id')
  public async findOne(id: string) {
    return await this.messagesService.findOne(id);
  }
}