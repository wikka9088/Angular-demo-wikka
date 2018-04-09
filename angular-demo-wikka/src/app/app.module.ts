import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HousesComponent } from './houses/houses.component';

import { FormsModule } from '@angular/forms';
import { HouseDetailComponent } from './house-detail/house-detail.component';
import {HouseService} from "./house.service";
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HouseEditorComponent } from './house-editor/house-editor.component'; // <-- NgModel lives here




@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    HouseDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HouseEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [
      //tells Angular to create a single, shared instance of HouseService and inject into any class that asks for it.
      HouseService,
      MessagesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
