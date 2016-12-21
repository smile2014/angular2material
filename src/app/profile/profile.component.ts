import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';

import { AlertService, UserService } from '../service';
import { User } from '../model';


@Component({
    selector: 'profile',
    templateUrl: 'profile.component.html',
    styleUrls: ["profile.component.scss"]
})
export class ProfileComponent implements OnInit {
    user: User;
    id: number;
    //user1: User;
    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private router: Router) {
        //let id = +this.route.params['id'];
        //this.userService.getById(this.id).subscribe(usr => this.user = usr);
        // if (localStorage.getItem('currentUser')) {
        //     // logged in so return true
        //     this.user = JSON.parse(localStorage.getItem('currentUser'));
        //     this.userService.getById(id).subscribe(usr => this.user1 = usr);
        //     this.userService.getById(id).subscribe(usr => {
        //         this.user1 = JSON.stringify(usr);
        //     });
        // }
        // // (+) converts string 'id' to a number
        // let id = this.route.snapshot.params['id'];

        // this.userService.getById(id).subscribe(usr => this.user = usr);
        // this.route.params
        //     // (+) converts string 'id' to a number
        //     .switchMap((params: Params) => this.userService.getById(params['id']))
        //     .subscribe((usr: User) => this.user = usr);
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = +params['id']; // (+) converts string 'id' to a number
            this.userService.getById(this.id).subscribe(usr => this.user = usr);
            // In a real app: dispatch action to load the details here.
        });
    }
}