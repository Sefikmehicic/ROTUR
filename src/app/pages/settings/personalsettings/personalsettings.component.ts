import { Component } from '@angular/core';
import { PersonalsettingsService } from './services/personalsettings.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-personalsettings',
  templateUrl: './personalsettings.component.html',
  styleUrls: ['./personalsettings.component.css']
})
export class PersonalsettingsComponent {

  constructor(private settings: PersonalsettingsService, public auth: AngularFireAuth) {}

  test() {

  }
}
