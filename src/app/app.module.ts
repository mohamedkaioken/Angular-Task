import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgRatingBarModule } from 'ng-rating-bar';
import { initializeApp } from "firebase/app";
import { environment } from 'src/environments/environment';

const firebaseConfig = {
  apiKey: "AIzaSyA9GG8qOHif0Cyo7S87DTPEwjC9y-5k9k4",
  authDomain: "vodafone-f943a.firebaseapp.com",
  projectId: "youtube-vodafone",
  storageBucket: "youtube-vodafone.appspot.com",
  messagingSenderId: "80470007597",
  appId: "1:80470007597:web:32b771c6dfe0eab6d33da4"
};
const app = initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgRatingBarModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
