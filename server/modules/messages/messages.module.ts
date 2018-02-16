import {Module} from '@nestjs/common';
import {MongooseModule} from '@nestjs/mongoose';
import {MessageSchema} from './message.schema';
import {MessagesService} from './messages.service';
import {MessagesController} from './messages.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Message', schema: MessageSchema }])
  ],
  components: [
    MessagesService
  ],
  controllers: [
    MessagesController
  ]
})
export class MessagesModule {

}