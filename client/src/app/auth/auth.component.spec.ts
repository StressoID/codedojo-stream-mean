import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from './auth.service';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AuthComponent', () => {
  let component: AuthComponent;
  let fixture: ComponentFixture<AuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        ReactiveFormsModule,
        SharedModule,
        RouterTestingModule,
        HttpClientTestingModule,
      ],
      declarations: [AuthComponent],
      providers: [AuthService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('check form state (invalid) when input fields are empty', () => {

    let username = '';
    let password = '';

    component.loginForm.setValue({username, password});
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('check form state (valid) when input fields are not empty', () => {

    let username = 'test';
    let password = 'test';

    component.loginForm.setValue({username, password});
    expect(component.loginForm.valid).toBeTruthy();
  });
});
