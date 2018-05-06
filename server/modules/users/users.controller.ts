import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {
  }

  @Post()
  public async create(@Body() createUserDto: CreateUserDto) {
    this.usersService.create(createUserDto);
  }

  @Get()
  public async findAll() {
    return await this.usersService.findAll();
  }

  @Get(':id')
  public async findOne(id) {
    return await this.usersService.findOne({ _id: id });
  }
}