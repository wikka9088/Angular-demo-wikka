import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';

import { FormsModule } from '@angular/forms'; // <-- NgModel lives here




@NgModule({
  declarations: [
    AppComponent,
    HousesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
