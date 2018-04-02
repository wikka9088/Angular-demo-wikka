import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";
import {DashboardComponent} from "./dashboard/dashboard.component";


const routes: Routes = [
    {path: 'houses', component: HousesComponent},
    {path: 'dashboard', component: DashboardComponent}
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
