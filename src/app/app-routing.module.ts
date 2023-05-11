import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireAuthGuard, canActivate, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/signin/signin.module')
      .then(m => m.SigninModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module')
      .then(m => m.HomeModule)
  },
  {
    path: 'settings/personalsettings',
    loadChildren: () => import('./pages/settings/personalsettings/personalsettings.module')
      .then(m => m.PersonalsettingsModule),
      ...canActivate(redirectUnauthorizedToLogin)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
