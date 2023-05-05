import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form!: FormGroup;

  isLoggingIn = false;
  isRecoveringPassword = false;

  errorLoggingIn = false;
  errorRecoveringPassword = false;
  errorMessage = '';

  SuccessRecoveringPassword = false;
  successMessage = '';

  constructor(
    private authenticationService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  login() {
    this.isLoggingIn = true;

    this.authenticationService.signIn({
      email: this.form.value.email,
      password: this.form.value.password
    }).subscribe(() => {
      this.router.navigate(['']);
    }, (error: any) => {
      this.errorLoggingIn = true;
      this.errorMessage = 'Felaktig e-post eller lösenord';
      this.isLoggingIn = false;
    })
  }

  recoverPassword() {
    this.isRecoveringPassword = true;

    this.authenticationService.recoverPassword(this.form.value.email).subscribe(() => {
      this.isRecoveringPassword = false;
      this.SuccessRecoveringPassword = true;
      this.successMessage = 'Mejl skickad för återställning av lösenord\n(Mejlet kan hamna i skräppost)'
    }, (error: any) => {
      console.log(error)
      this.isRecoveringPassword = false;
      this.errorRecoveringPassword = true;
      this.errorMessage = error.message;
    })
  }
}
