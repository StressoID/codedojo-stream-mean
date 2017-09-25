import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { User } from './user.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent  {
  
  private user: User;

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });
  
  constructor(private router: Router, private authService: AuthService) { }

  public login() {
    this.authService.authorize(this.loginForm.value).subscribe(user => {
      this.user = user;
      
      localStorage.setItem('user', JSON.stringify(this.user));
      this.router.navigate(['/chat']);
    });
  }

}
