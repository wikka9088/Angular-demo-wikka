import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';

import { FormsModule } from '@angular/forms';
import { HouseDetailComponent } from './house-detail/house-detail.component'; // <-- NgModel lives here




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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
