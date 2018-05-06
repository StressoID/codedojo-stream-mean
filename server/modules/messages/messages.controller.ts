import { Body, Controller, Get, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { CreateMessageDto } from './create-message.dto';


@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {
  }

  @Post()
  public async create(@Body() createMessageDto: CreateMessageDto) {
    this.messagesService.create(createMessageDto);
  }

  @Get()
  public async findAll() {
    return await this.messagesService.findAll();
  }

  @Get(':id')
  public async findOne(id) {
    return await this.messagesService.findOne({ '_id': id });
  }
}