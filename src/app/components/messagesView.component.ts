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
  `]
})

export class ViewMessages {
  @Input()
  messages: FirebaseListObservable<Message[]>;
}
