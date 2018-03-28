import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";


const routes: Routes = [
    {path: 'houses', component: HousesComponent}
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],

    exports: [
        RouterModule
    ],

    declarations: [],

})
export class AppRoutingModule {
}
