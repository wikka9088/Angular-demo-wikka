import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {House} from "./house";
import {of} from "rxjs/observable/of";
import {HOUSES} from "../mock-data/mock-houses";
import {MessagesService} from "./messages.service";

@Injectable()
export class HouseService {

  //Angular will inject the singleton MessagesService into that property when it creates the HouseService.
  constructor(private messageService: MessagesService) { }

  getHouse(id: number): Observable<House> {
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    return of(HOUSES.find(house => house.id === id));
  }

  getHouses(): Observable<House[]> {
    //send the message _after_ fetching the houses
    this.messageService.addMessage('HouseService: Fetched the houses');

    return of(HOUSES);
  }
}
