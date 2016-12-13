import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import { User } from '../model';
import { UserService, ItemService } from '../service';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    usr: any;

    constructor(private userService: UserService, private itemService: ItemService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //this.itemService.getAllItems().subscribe(result => console.log(result));
        // this.usr = this.itemService.getAllItems();
        // console.log(this.usr);
    }

    ngOnInit() {
        this.loadAllUsers();
        //this.loadAllItems();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    // private loadAllItems() {
    //     this.itemService.getAllItems().subscribe(items => { this.usr = items });
    // }
}