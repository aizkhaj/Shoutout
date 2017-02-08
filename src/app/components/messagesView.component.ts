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
      <span class="time">{{msgs.sentAt}}</span>
    </div>
  </div>
  <div class="input-section"
  *ngIf="this.user">
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

    .content {
      margin-left: 2em;
      text-align: center;
    }

    .time {
      margin-left: 2em;
      text-align: right;
    }
  `]
})

export class ViewMessages {
  @Input()
  messages: FirebaseListObservable<Message[]>;
  @Input() user: any;
  @Input() selectedRoomKey: any;

  userMessage: string;
  sentAt: any;


  send() {
    //this method pushes user input into Message Array on firebase

    this.timestamp();

    let msg = new Message(this.user, this.userMessage, this.sentAt, this.selectedRoomKey);
    console.log(msg);
/*
    let msg = {
      userId: this.user,
      content: this.userMessage,
      sentAt,
      roomId: string
    }
*/
    this.messages.push(msg);
    this.userMessage = "";
  }

  timestamp() {
    let now = new Date();

    let date = [now.getMonth() + 1, now.getDate(), now.getFullYear()];
    var time: any = [now.getHours(), now.getMinutes(), now.getSeconds()];
    let suffix = (time[0] < 12) ? "AM" : "PM";

    time[0] = time[0] || 12;
    for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

    let formattedTime = time.join(":") + " " + suffix;
    this.sentAt = formattedTime;
  }

}
