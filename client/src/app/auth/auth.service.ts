import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user.model';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

  private HOST = 'http://localhost:3000';

  public authorize(user) {

    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.post<User>(this.HOST + '/authorize', user, { headers: header });
  }

}
