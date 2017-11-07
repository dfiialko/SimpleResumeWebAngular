import { Message } from './../../models/message';
import { Component, OnInit, HostListener, ViewChild, ElementRef } from '@angular/core';
import { ApiAiClient } from 'api-ai-javascript';

@Component({
  selector: 'app-bot',
  templateUrl: './bot.component.html',
  styleUrls: ['./bot.component.css']
})

export class BotComponent implements OnInit {
  // Create instance of ApiAi client with access token
  client = new ApiAiClient({ accessToken: '5ea7f74f2f2f4fa5a14288ec430783a8' });
  // Creates array of type Message for inputs
  clientMessage: Message[] = [];
  @ViewChild('message') inputMessage: ElementRef;
  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.messageFromInput(this.inputMessage.nativeElement);
    }
  }
  ngOnInit(): void { }
  constructor() { }
  // Pass value from the input. Inserts it into message Array,also
  // Sends it with textRequest to the ApiAi Client.
  // Response is passed into the same array
  messageFromInput(message) {
    // Check if message is not empty,otherwise it would give an error
    if (message.value !== '') {
      this.clientMessage.push({
        avatar: 'Your Message',
        content: message.value
      });
      this.client.textRequest(message.value).then((response) => {
        this.clientMessage.push({
          avatar: 'BOT',
          content: response.result.fulfillment['speech'] || 'I can\'t seem to figure that out!'
        });
        message.value = '';
      });
    }
  }
}
