import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerUserForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}
  ngOnInit(): void {
    this.initForm();
  }
  getUsers() {
    this.http.get('http://localhost:3300/api/v1/users').subscribe((response: any) => {
      console.log(response);
    });
  }

  initForm() {
    this.registerUserForm = this.formBuilder.group({
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  saveUser(): void {
    if (this.registerUserForm.valid) {
      const salt = bcrypt.genSaltSync(10);
      const hashPassword = bcrypt.hashSync(this.registerUserForm.value.password, salt);
      this.registerUserForm.value.password = hashPassword;
      console.log(this.registerUserForm.value); // This hashed password will be sent to the server
      this.http.post('http://localhost:3300/api/v1/users/addUser', this.registerUserForm.value).subscribe((data) => { 
        console.log(data); 
      });
    }
    console.log('Saving user...');
  }

}
