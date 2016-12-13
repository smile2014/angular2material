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
    user1: Observable<User>;
    constructor(private userService: UserService,
        private route: ActivatedRoute,
        private router: Router) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            this.user = JSON.parse(localStorage.getItem('currentUser'));
            let id = +this.route.snapshot.params['id'];
            //this.userService.getById(id).subscribe(usr => this.user1 = usr);
            // this.userService.getById(id).subscribe(usr => {
            //     this.user1 = JSON.stringify(usr);
            // });
        }
        // // (+) converts string 'id' to a number
        // let id = this.route.snapshot.params['id'];

        // this.userService.getById(id).subscribe(usr => this.user = usr);
        // this.route.params
        //     // (+) converts string 'id' to a number
        //     .switchMap((params: Params) => this.userService.getById(params['id']))
        //     .subscribe((usr: User) => this.user = usr);
    }

    ngOnInit() {
        this.user1 = this.route.params
            .switchMap((params: Params) => {
                let id = +params['id'];
                return this.userService.getById(params['id']);
            });
            console.log(this.user1);
    }
}