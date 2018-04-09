import {Component, OnInit, Input} from '@angular/core';
import {HouseService} from "../house.service";
import {ActivatedRoute} from "@angular/router";
import {House} from "../house";
import { Location } from '@angular/common';

@Component({
  selector: 'app-house-editor',
  templateUrl: './house-editor.component.html',
  styleUrls: ['./house-editor.component.css']
})
export class HouseEditorComponent implements OnInit {

  @Input() house : House;

  constructor(
      private houseService: HouseService,
      private route: ActivatedRoute,
      private location: Location,
  ) { }

  ngOnInit() {
    this.getHouse();
  }

  getHouse(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.houseService.getHouse(id).subscribe(house => this.house = house )
  }

  goBack(): void
  {
    this.location.back();
  }

  saveDetail(): void
  {

  }

}
