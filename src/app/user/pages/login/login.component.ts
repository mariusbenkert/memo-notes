import { AuthService } from './../../../shared/auth/auth.service';
import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css',
    '../../../../styles/label.css',
    '../../../../styles/button.css',
    '../../../../styles/input.css',
    '../../../../styles/form.css',
  ],
})
export class LoginComponent {
  @ViewChild('f', { static: false }) loginForm: NgForm;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    console.log(email, password);

    this.isLoading = true;
    this.authService.login(email, password).subscribe(
      (resData) => {
        this.isLoading = false;
        localStorage.setItem('token', resData.user.token);
        console.log(resData);
        this.router.navigate(['/editor']);
      },
      (errorMessage) => {
        this.isLoading = false;
        console.log(errorMessage);
      }
    );
    this.loginForm.reset();
  }
}
