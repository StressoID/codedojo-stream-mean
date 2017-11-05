import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class RegistrationService {

  private HOST = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  public register(user) {
    const header = new HttpHeaders();
    header.set('Content-Type', 'application/json');

    return this.http.post(this.HOST + '/users', user, { headers: header });
  }

}
