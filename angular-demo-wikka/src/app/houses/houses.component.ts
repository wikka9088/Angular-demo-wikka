import { Component, OnInit } from '@angular/core';
import {HOUSES} from "../../mock-data/mock-houses";

@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {

  houses = HOUSES;

  constructor() { }

  ngOnInit() {
  }

}
