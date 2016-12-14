import { Component, ViewChild, ViewContainerRef, OnInit } from '@angular/core';
import { MdSidenav, MdDialog, MdDialogConfig } from "@angular/material";

import { SettingComponent } from "./setting";
import { LoginComponent } from "./login";
import { GlobalEventsManager } from "./helper";
import { User } from './model';
import { SidemenuService } from './service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MdSidenav;
  isDarkTheme: boolean = false;
  loggedIn: boolean = false;
  loggedInUser: any;
  sideMenuItems: any[];

  constructor(
    public dialog: MdDialog,
    public vcr: ViewContainerRef,
    private globalEventsManager: GlobalEventsManager,
    private sidemenuService: SidemenuService) {
    this.globalEventsManager.isLoggedIn.subscribe((mode) => {
      this.loggedIn = mode;
    });
    this.sidemenuService.getSidemenu().subscribe(items => { this.sideMenuItems = items; });
  }

  ngOnInit() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      this.loggedIn = true;
      this.loggedInUser = JSON.parse(localStorage.getItem('currentUser'));
    }
  }

  openSettingDialog() {
    const config = new MdDialogConfig();
    config.viewContainerRef = this.vcr;
    this.dialog.open(SettingComponent, config);
  }
}
