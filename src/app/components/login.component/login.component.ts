import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppTitleService } from '../../services/title.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showPassword = false;

  ngOnInit(): void {
    this.initialiseLoginForm();this.appTitle.set('Login');
  }// login.component.ts
constructor(private appTitle: AppTitleService) {}


  initialiseLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      rememberMe: new FormControl(false),
    });
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onLogin(): void {
    if (this.loginForm.valid) {
      const { email, password, rememberMe } = this.loginForm.value;
      console.log('Login attempt:', {
        email,
        rememberMe,
      });
      // TODO: Add authentication service call here
      // this.authService.login(email, password, rememberMe).subscribe(...);
    }
  }
}
