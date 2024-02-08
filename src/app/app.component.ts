import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store, select } from '@ngrx/store';
import { Router } from 'express';
import { AppState } from './Models/AppState';
import { UserService } from './State/User/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'E-commerce';
  constructor(
    private userService: UserService,
    private store: Store<AppState>
  ) {}

  ngOnInit() {
    if (localStorage.getItem('jwt')) this.userService.getUserProfile()
    this.store.pipe(select((store) => store.auth)).subscribe((user) => {
      this.userService.getUserProfile();
      console.log('user profile ',this.store);
      
    });
  }
}
