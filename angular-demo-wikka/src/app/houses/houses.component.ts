import { Component, OnInit } from '@angular/core';
import {HOUSES} from "../../mock-data/mock-houses";
import {House} from "../house";
import {HouseService} from "../house.service";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses: House[];

  selectedHouse: House;

  onSelect(house: House): void
  {
    this.selectedHouse = house;
  }

  //When Angular creates a HousesComponent, the Dependency Injection system sets the houseService parameter to the singleton instance of HouseService.
  constructor(private houseService: HouseService) { }

  ngOnInit() {
    this.getHouses();
  }

  getHouses(): void {
    //this.houses = this.houseService.getHouses();

      this.houseService.getHouses().subscribe(houses => this.houses = houses); //convert House[] to Observable<House[]>
  }

}
