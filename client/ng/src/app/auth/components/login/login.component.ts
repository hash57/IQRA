import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(private  formBuilder: FormBuilder, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log(this.loginForm);
    if (this.loginForm.valid) {

      // const salt = bcrypt.genSaltSync(10);
      // const hashPassword = bcrypt.hashSync(this.loginForm.value.password, salt);
      // this.loginForm.value.password = hashPassword;

      this.http.post('http://localhost:3300/api/v1/auth/login', this.loginForm.value).subscribe(data => {
        console.log(data);
        this.router.navigate(['dashboard']);
      });
    }
  }
}
