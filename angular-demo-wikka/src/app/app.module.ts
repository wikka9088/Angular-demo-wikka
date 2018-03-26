import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';

import { FormsModule } from '@angular/forms';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import {HouseService} from "./house.service"; // <-- NgModel lives here




@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
      HouseService, //tells Angular to create a single, shared instance of HeroService and inject into any class that asks for it.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
