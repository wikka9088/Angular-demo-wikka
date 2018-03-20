import { Component, OnInit } from '@angular/core';
import {HOUSES} from "../../mock-data/mock-houses";
import {House} from "../house";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses = HOUSES;

  selectedHouse: House;

  onSelect(house: House): void
  {
    this.selectedHouse = house;
  }

  constructor() { }

  ngOnInit() {
  }

}
