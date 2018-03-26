import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {

  messages: string[] = [];

  constructor() { }

  addMessage(message: string) {
    this.messages.push(message);
  }

  clearMessages() {
    this.messages = [];
  }

}
