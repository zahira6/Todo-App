import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Todo-App';


  constructor(private auth : AuthService){}

  loggedIn(): boolean{
    return this.auth.LoggedIn();
  }
  loggedOut(): boolean{
    return !this.loggedIn();
  }

  ngOnInit() {}



}
