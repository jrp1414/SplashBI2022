import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../shared/localstorage.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent {

  constructor(private userService: UserService, private localStorage: LocalStorageService, 
    private router:Router) {

  }
  loginForm!: FormGroup;

  submitted = false;

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    this.submitted = true;
    this.userService.login({ ...this.loginForm.value, grant_type: 'password' }).subscribe((data) => {
      this.localStorage.Set(data);
      this.router.navigate(['/home']);
    }, (e)=>{
      console.error(e);
    });
  }
}
