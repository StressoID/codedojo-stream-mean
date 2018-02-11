import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {User} from './user.model';
import {MatSnackBar} from "@angular/material";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  private user: User;

  constructor(private router: Router, private authService: AuthService, private matSnackBar: MatSnackBar) {}

  public login() {
    this.authService.authorize(this.loginForm.value)
      .subscribe(user => {
        this.user = user;
        if (this.user) {
          localStorage.setItem('user', JSON.stringify(this.user));
          this.router.navigate(['/chat']);
          return;
        }

        this.matSnackBar.open('Нет такого пользователя', 'Закрыть', {
          duration: 2000
        });
      });
  }

}
