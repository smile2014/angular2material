import { Component, OnInit } from '@angular/core';

import { SidemenuService } from '../service';
import { GlobalEventsManager } from "../helper";
import { SideMenu, User } from '../model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sideMenuItems: Array<SideMenu>;
  loggedIn: boolean = false;
  loggedInUser: User;
  constructor(
    private globalEventsManager: GlobalEventsManager,
    private sidemenuService: SidemenuService) {
    this.globalEventsManager.isLoggedIn.subscribe((mode) => {
      this.loggedIn = mode;
    });
    this.globalEventsManager.loggedInUser.subscribe((user) => {
      this.loggedInUser = user;
    });
    // this.sidemenuService.getSidemenu().subscribe(items => { this.sideMenuItems = items; });
  }

  toggleAdd(index: number, condition: boolean) {
    this.sideMenuItems[index].isSubmenu = condition;
  }

  ngOnInit() {
    if (!(this.loggedIn && this.loggedInUser)) {
      if (localStorage.getItem('currentUser')) {
        let usr: User = JSON.parse(localStorage.getItem('currentUser'));
        this.globalEventsManager.isLoggedIn.emit(true);
        this.globalEventsManager.loggedInUser.emit(usr);
      }
    }
    this.sidemenuService.getSidemenuByRole(this.loggedInUser.roleId).subscribe(items => { this.sideMenuItems = items; });
  }
}
