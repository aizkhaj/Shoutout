import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { ViewMessages } from './components/messagesView.component';

export const firebaseConfig = {
  apiKey: 'AIzaSyA73X6767uGivbb2dNQi-F7fI3sv-PrZ9A',
  authDomain: 'chatz-acdf6.firebaseapp.com',
  databaseURL: 'https://chatz-acdf6.firebaseio.com',
  storageBucket: 'chatz-acdf6.appspot.com',
  messagingSenderId: '115444003353'
};

@NgModule({
  declarations: [
    AppComponent,
    ViewMessages
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
