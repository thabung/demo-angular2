import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MainComponent } from './main.component';
import { LocationService } from './location.service';
import { LocationComponent,LocationDetailComponent} from './location.component';
import { HttpModule } from '@angular/http';
import {AppRoutingModule} from './route';

@NgModule({
  imports: [BrowserModule,HttpModule,AppRoutingModule],
  declarations: [MainComponent,LocationComponent,LocationDetailComponent],
  bootstrap: [MainComponent],
  providers: [LocationService,HttpModule]
})
export class AppModule { }
