import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { BlankComponent } from './pages/mocks/blank/blank.component';
import { NavbarModule } from './components/navbar/navbar.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
// import { authReducer } from './state/auth/auth.reducer';
// import { AuthEffects } from './state/auth/auth.effects';

@NgModule({
  declarations: [
    AppComponent,
    BlankComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,

    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
     StoreModule.forRoot(),
     EffectsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
