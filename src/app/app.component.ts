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
  selectedRoom: string;


  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    this.messages = af.database.list('/messages');
  }

  createRoom() {
    this.rooms.push(this.newRoomName)
  }

  selectRoom(room) {
    this.selectedRoom = room;
    this.getMessagesByRoomId(room.$key);
  }

  getMessagesByRoomId(roomId) {
    this.messages = this.af.database.list('/messages', {
     query: {
       orderByChild: 'roomId',
       equalTo: roomId
     }
   });
 }
}
