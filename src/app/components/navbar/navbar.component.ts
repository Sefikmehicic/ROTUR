import { Component, Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  logOut() {
    this.authenticationService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }

  test() {
    this.authenticationService.test();
  }
}
