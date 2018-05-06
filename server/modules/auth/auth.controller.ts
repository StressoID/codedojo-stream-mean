import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

@Controller('authorize')
export class AuthContoller {
  constructor(private authService: AuthService) {
  }

  @Post()
  public async getToken(@Body() userDto) {
    return await this.authService.getToken(userDto);
  }
}