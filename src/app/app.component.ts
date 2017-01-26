import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Message } from './message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rooms: FirebaseListObservable<any[]>;
  newRoomName: string;
  messages: FirebaseListObservable<Message[]>;
  constructor(af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
  }

  createRoom() {
    this.rooms.push(this.newRoomName)
  }

}
