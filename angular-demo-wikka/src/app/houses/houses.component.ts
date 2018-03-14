import { Component, OnInit } from '@angular/core';
import {House} from "../house";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  house: House = {
    id: 1,
    address: '616 Egret Way',
    region: 'Half Moon Bay',
    price: 420000
  };

  constructor() { }

  ngOnInit() {
  }

}
