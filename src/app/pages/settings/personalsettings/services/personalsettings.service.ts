import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonalsettingsService {

  constructor(
    private auth: AngularFireAuth
  ) { }
}
