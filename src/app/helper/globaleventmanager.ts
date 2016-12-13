import { Injectable, EventEmitter } from "@angular/core";

import { User } from '../model';

@Injectable()
export class GlobalEventsManager {
    public isLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
    public loggedInUser: EventEmitter<User> = new EventEmitter<User>();
    constructor() {
    }
}