import { Component, OnInit } from '@angular/core';
import {House} from "../house";
import {HouseService} from "../house.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  houses: House[] = [];
  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void
  {
    this.houseService.getHouses().subscribe(houses => this.houses = houses.slice(1,5))
  }

}
