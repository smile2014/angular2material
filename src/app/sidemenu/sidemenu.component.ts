import { Component, OnInit } from '@angular/core';

import { SidemenuService } from '../service';
import { SideMenu } from '../model';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {
  sideMenuItems: Array<SideMenu>;
  constructor(private sidemenuService: SidemenuService) {
    this.sidemenuService.getSidemenu().subscribe(items => { this.sideMenuItems = items;});
  }

  toggleAdd(index: number, condition: boolean) {
    this.sideMenuItems[index].isSubmenu = condition;
  }

  ngOnInit() {
  }

}
