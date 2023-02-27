import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm=new FormGroup({
    password: new FormControl('',Validators.required),
    username: new FormControl('',Validators.required)
  })
  constructor() { }

  ngOnInit(): void {
  }

}
