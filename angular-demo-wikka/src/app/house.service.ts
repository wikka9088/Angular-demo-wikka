import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {House} from "./house";
import {of} from "rxjs/observable/of";
import {HOUSES} from "../mock-data/mock-houses";

@Injectable()
export class HouseService {

  constructor() { }

  getHouses(): Observable<House[]> {
    return of(HOUSES);
  }
}
