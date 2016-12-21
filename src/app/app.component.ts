import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";
import { Router } from '@angular/router';

import { GlobalEventsManager } from "./helper";
import { User, SideMenu } from './model';
import { SidemenuService } from './service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkTheme: boolean = false;
  loggedIn: boolean = false;
  loggedInUser: User;

  constructor(
    // public dialog: MdDialog,
    // public vcr: ViewContainerRef,
    private globalEventsManager: GlobalEventsManager,
    private router: Router) {
    this.globalEventsManager.isLoggedIn.subscribe((mode) => {
      this.loggedIn = mode;
    });
    this.globalEventsManager.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnInit() {
    if (!(this.loggedIn && this.loggedInUser)) {
      if (localStorage.getItem('currentUser')) {
        let usr: User = JSON.parse(localStorage.getItem('currentUser'));
        this.globalEventsManager.isLoggedIn.emit(true);
        this.globalEventsManager.loggedInUser.emit(usr);
      }
      // logged in so return true
      // this.loggedIn = true;
      // this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  // openSettingDialog() {
  //   const config = new MdDialogConfig();
  //   config.viewContainerRef = this.vcr;
  //   this.dialog.open(SettingComponent, config);
  // }
}
