import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegistrationService {

  private HOST = 'https://codedojo-streams-stressoid.c9users.io:8080';

  constructor(private http: HttpClient) { }
  

  public register(user) {
      const header = new HttpHeaders();
      header.set('Content-Type', 'application/json');
      
      return this.http.post(this.HOST + '/users', user, { headers: header});
  }
  
}
