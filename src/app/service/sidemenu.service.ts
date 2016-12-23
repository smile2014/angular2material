import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { AuthenticationService } from "./authentication.service";
import { GlobalEventsManager } from "../helper";
import { User } from '../model';

@Injectable()
export class SidemenuService {
    loggedInUser: User;
    constructor(
        private http: Http,
        private authService: AuthenticationService,
        private globalEventsManager: GlobalEventsManager) {
    }

    getSidemenu() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //return this.http.get('/api/sidemenu/' + currentUser.roleId, this.authService.jwt()).map((response: Response) => response.json());
        return this.http.get('/api/sidemenu', this.authService.jwt()).map((response: Response) => response.json());
    }

    getSidemenuByRole(roleId: number) {
        // let currentUser: User = JSON.parse(localStorage.getItem('currentUser'));
        return this.http.get('/api/sidemenu/' + roleId, this.authService.jwt()).map((response: Response) => response.json());
    }
    // private helper methods

    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}
