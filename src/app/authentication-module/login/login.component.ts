import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalStorageKey } from 'src/app/core/config/const';
import { StorageService } from 'src/app/core/helper/storage.service';
import { ToasterServices } from 'src/app/core/services/toaster.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });
  constructor(
    private StorageService: StorageService,
    private toaster: ToasterServices
  ) {}
  passwordViewFlag: boolean = false;
  ngOnInit(): void {
    this.StorageService.clearLocalStorage();
  }
  login() {
    // console.log(this.loginForm.controls['username'])
    if (this.loginForm.controls['username'].errors) {
      this.toaster.showError('Please Enter Username');
      // console.log("works")
    }
    if (this.loginForm.controls['password'].errors) {
      this.toaster.showError('Please Enter Password');
    }
    if (this.loginForm.invalid) {
      return;
    } else {
      this.StorageService.setLocalStorage(
        LocalStorageKey.userLogin,
        this.loginForm.value
      );
    }
  }

  passIconToggle() {
    this.passwordViewFlag = !this.passwordViewFlag;
  }
}
