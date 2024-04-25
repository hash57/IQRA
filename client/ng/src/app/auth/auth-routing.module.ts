import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '@app/auth/components/login/login.component';
import { RegisterComponent } from '@app/auth/components/register/register.component';
import { AuthComponent } from '@app/auth/components/auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: AuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },
];

@NgModule({
  declarations: [
    LoginComponent, RegisterComponent, AuthComponent
  ],
  imports: [RouterModule.forChild(routes), ReactiveFormsModule, HttpClientModule],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
