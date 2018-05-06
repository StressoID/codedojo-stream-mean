import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatMessage } from './chat.model';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ChatService {

  public messageSubject: Subject<any> = new Subject();

  private HOST = 'http://localhost:3000';

  constructor(private http: HttpClient) {
    // this.socket.fromEvent('updateMessages').subscribe(data => {
    //   console.log('chat service update message');
    //   this.messageSubject.next(true);
    // });
  }

  public getMessages() {
    console.log('getMessages wor');
    return this.http.get<ChatMessage[]>(this.HOST + '/messages');
  }

  public sendMessage(message) {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.post<ChatMessage>(this.HOST + '/messages', message, { headers: header })
      .pipe(
        map((response) => {
          // this.socket.emit('newMessage');
          console.log('response ok');
          return response;
        })
      );

  }

  public update() {
    // return this.socket.fromEvent('updateMessages')
    //   .pipe(
    //     map(data => true)
    //   );
  }

}
