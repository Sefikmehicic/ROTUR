import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public auth: AngularFireAuth,
    private authenticationService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    
  }

  goHome() {
    this.router.navigate(['']);
  }

  goToLogin() {
    this.router.navigate(['login']);
  }

  goToSettings() {
    this.router.navigate(['settings/personalsettings']);
  }

  logOut() {
    this.authenticationService.logout().subscribe(() => {
      this.router.navigate(['']);
    })
  }
}
