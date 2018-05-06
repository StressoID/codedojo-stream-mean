import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChatService } from './chat.service';

import { ChatMessage } from './chat.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit, OnDestroy {

  public chatMessages: ChatMessage[] = [];
  public messageForm: FormGroup = new FormGroup({
    messageControl: new FormControl(),
  });

  // private timer;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.messageSubject.subscribe(() => {
      console.log('chat component update message');
      this.getChats();
    });

    this.getChats();
  }

  ngOnDestroy() {
    // clearInterval(this.timer);
  }

  getChats() {
    this.chatService.getMessages().subscribe((response) => {
      this.chatMessages = response;
    }, () => {
      console.error('Server not allowed');
    });
  }

  public send() {
    const message = new ChatMessage();
    const user = JSON.parse(localStorage.getItem('user'));

    message.userId = user._id;
    message.nickname = user.nickname;
    message.message = this.messageForm.controls.messageControl.value;

    this.chatService.sendMessage(message).subscribe(() => {
      this.getChats();
      this.messageForm.reset();
    });
  }

}
