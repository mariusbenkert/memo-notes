import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit() {
    console.log(this.loginForm);
  }
}
