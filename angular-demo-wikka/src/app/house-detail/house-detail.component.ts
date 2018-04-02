import {Component, OnInit, Input} from '@angular/core';
import {House} from "../house";
import {HouseService} from "../house.service";
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-detail',
  templateUrl: './house-detail.component.html',
  styleUrls: ['./house-detail.component.css']
})
export class HouseDetailComponent implements OnInit {

  @Input() house : House;


  constructor(
      private houseService: HouseService,
      private route: ActivatedRoute,
      private location: Location
  ) { }

  ngOnInit() {
      this.getHouse();
  }

  getHouse(): void
  {
      //The route.snapshot is a static image of the route information shortly after the component was created.
      const id = +this.route.snapshot.paramMap.get('id');
      this.houseService.getHouse(id).subscribe(house => this.house = house)
  }

    goBack(): void {
        this.location.back();
    }

}
