import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class AuthService {

  private HOST = 'https://codedojo-streams-stressoid.c9users.io:8080';

  constructor(private http: HttpClient) { }
 
  public authorize(user) {
      
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      
      return this.http.post<User>(this.HOST + '/authorize', user, { headers: header });
  }

}
