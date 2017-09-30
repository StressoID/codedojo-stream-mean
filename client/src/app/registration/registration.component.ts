import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  public regForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
    nickname: new FormControl(),
  });

  constructor(private registrationService: RegistrationService) { }

  ngOnInit() {
  }

  public reg() {
    this.registrationService.register(this.regForm.value).subscribe(response => {
      console.log(response);
    });
  }

}
