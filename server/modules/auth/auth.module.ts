import {Module} from '@nestjs/common';
import {AuthContoller} from './auth.controller';
import {AuthService} from './auth.service';
import {UsersModule} from "../users/users.module";

@Module({
  imports: [UsersModule],
  controllers: [AuthContoller],
  components: [AuthService]
})
export class AuthModule {
}