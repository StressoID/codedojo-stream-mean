import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatMessage } from './chat.model';
import { Socket } from 'ng-socket-io';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class ChatService {
  
  public messageSubject:Subject<any> = new Subject();

  private HOST = 'https://codedojo-streams-stressoid.c9users.io:8080';
  
  constructor(private http: HttpClient, private socket: Socket) {
    this.socket.fromEvent('updateMessages').subscribe(data => {
      console.log('chat service update message');
      this.messageSubject.next(true);
    });
  }
  
  public getMessages() {
      console.log('getMessages wor');
      return this.http.get<ChatMessage[]>(this.HOST + '/messages');
  }

  public sendMessage(message) {
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      return this.http.post<ChatMessage>(this.HOST + '/messages', message, { headers: header })
      .map((response) => {
        this.socket.emit('newMessage');
        console.log('response ok');
        return response;
      });
  }
  
  public update() {
    return this.socket.fromEvent('updateMessages').map(data => true);
  }
  
}
