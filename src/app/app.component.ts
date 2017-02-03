import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthProviders } from 'angularfire2';
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
  user = {};


  constructor(public af: AngularFire) {
    this.rooms = af.database.list('/rooms');
    //this.messages = af.database.list('/messages'); we don't need this line anymore because it's being called from our getMessagesByRoomId method.
    this.af.auth.subscribe(user => {
      if(user) {
        // user logged in
        this.user = user;
      } else {
        // user not logged in
        this.user = {};
      }
    });
  }

  login() {
    this.af.auth.login({
      provider: AuthProviders.Google
    });
    console.log(this.user);
  }

  logout() {
    this.af.auth.logout();
    alert("You have been logged out.");
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
