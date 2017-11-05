import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService],
    });
  });

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));


  it('should send request to /authorize endpoint ',
    inject(
      [AuthService, HttpClient, HttpTestingController],
      (service: AuthService, http: HttpClient, httpMock: HttpTestingController) => {

        service.authorize({username: 'test', password: 'test'}).subscribe(
        response => {
        	expect(response).toBeTruthy();
        });
      }));
});
