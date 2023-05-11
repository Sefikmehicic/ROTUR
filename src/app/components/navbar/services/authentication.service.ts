import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<any> | undefined;


  constructor(
    private auth: AngularFireAuth
    ) {}

    logout(): Observable<void> {
      return from(this.auth.signOut());
    }

    test() {
      this.auth.user
    .subscribe(result => {
      if(result) {
        console.log(result);
      } else {
        console.log("USER IS NOT LOGGED IN");
      }
    });
    }
}
