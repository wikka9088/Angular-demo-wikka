import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HousesComponent} from "./houses/houses.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {HouseDetailComponent} from "./house-detail/house-detail.component";


const routes: Routes = [
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'houses', component: HousesComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: 'detail/:id', component: HouseDetailComponent}
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
