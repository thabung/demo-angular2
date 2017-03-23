import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LocationDetailComponent} from './location.component';

const routes: Routes = [
  
  {
    path: 'details/:code',
    component: LocationDetailComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


