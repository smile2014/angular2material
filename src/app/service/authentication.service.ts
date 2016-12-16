import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { GlobalEventsManager } from "../helper";
import { User } from "../model";

@Injectable()
export class AuthenticationService {
    constructor(
        private http: Http,
        private globalEventsManager: GlobalEventsManager) { }

    login(username: string, password: string) {
        return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
            .map((response: Response) => {
                // login successful if there's a jwt token in the response
                let user: User = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.globalEventsManager.isLoggedIn.emit(true);
                    this.globalEventsManager.loggedInUser.emit(user);
                }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.globalEventsManager.isLoggedIn.emit(false);
        this.globalEventsManager.loggedInUser.emit(null);
    }
}
