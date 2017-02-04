import { Component, Input } from '@angular/core';
import { Message } from '../message'
import { FirebaseListObservable } from 'angularfire2';

@Component ({
  selector: 'message-view',
  template: `
  <div class="msg-container">
  <!--here goes the name of the room that is currently selected in app.component.html. For this to be, these two comps need to communicate.
  //Below the room name, it should show a list of messages here.-->

    <div class="messages-block" *ngFor="let msgs of messages | async" >
      <span class="user">{{msgs.userId}}</span>
      <span class="content">{{msgs.content}}</span>
      {{msgs.sentAt}}
    </div>
  </div>
  <div class="input-section">
    <input class="input-field"
    [(ngModel)]="userMessage"
    placeholder="Type your message here">
    <button id="send-button"
    (click)="send()">Send</button>
  </div>
  `,
  styles: [`
    .msg-container {
      float: left;
      margin-left: 17em;
      margin-top: 5em;
    }
    .messages-block {
      background-color: #d5dae2;
      margin: 0.4em;
      padding: 1em;
      padding-right: 15em;
    }

    .input-section {
      position: fixed;
      bottom: 5vh;
      margin-left: 17em;
    }

    .input-field {
      position: fixed;
      margin-bottom: 2em;
      width: 60vw;
    }

    #send-button {
      position: relative;
      margin-left: 65vw;
    }
  `]
})

export class ViewMessages {
  @Input()
  messages: FirebaseListObservable<Message[]>;
  userMessage: string;


  send() {
    //this method pushes user input into Message Array on firebase
    this.messages.push(this.userMessage);
  }
}
