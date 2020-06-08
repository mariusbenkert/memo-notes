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
  @ViewChild('password', { static: false }) passwordInput: NgForm;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.loginForm.valid) {
      return;
    }

    console.log(this.passwordInput);
    const { email, password } = this.loginForm.value;

    console.log(email, password);

    this.isLoading = true;
    this.error = null;
    this.authService.login(email, password).subscribe(
      (resData) => {
        console.log(resData);
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['/editor']);
      },
      (errorMessage) => {
        this.isLoading = false;
        this.error = errorMessage;
        console.log(errorMessage);
      }
    );
    this.passwordInput.reset();
    // this.loginForm.reset();
  }
}
