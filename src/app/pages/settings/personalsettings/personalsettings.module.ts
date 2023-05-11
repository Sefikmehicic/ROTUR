import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalsettingsComponent } from './personalsettings.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarModule } from 'src/app/components/navbar/navbar.module';

const routes: Routes = [
  {
    path: '',
    component: PersonalsettingsComponent
  }
]

@NgModule({
  declarations: [
    PersonalsettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

    NavbarModule
  ]
})
export class PersonalsettingsModule { }
