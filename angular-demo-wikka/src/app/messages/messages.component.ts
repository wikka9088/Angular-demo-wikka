import { Component, OnInit } from '@angular/core';
import {MessagesService} from "../messages.service";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  //The messageService property must be public because you're about to bind to it in the template.
  constructor(public messagesService: MessagesService) { }

  ngOnInit() {
  }

}
