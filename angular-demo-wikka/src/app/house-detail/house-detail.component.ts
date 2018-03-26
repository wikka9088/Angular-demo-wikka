import {Component, OnInit, Input} from '@angular/core';
import {House} from "../house";
import {HOUSES} from "../../mock-data/mock-houses";

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  @Input() house : House;


  constructor() { }

  ngOnInit() {
  }

  getHouses() : House[] {
      return HOUSES;
  }

}
