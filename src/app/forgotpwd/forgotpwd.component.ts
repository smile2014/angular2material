import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, AuthenticationService } from '../service';
import { GlobalEventsManager } from "../helper";

@Component({
    templateUrl: 'forgotpwd.component.html',
    styleUrls: ["forgotpwd.component.scss"]
})

export class ForgotpwdComponent implements OnInit {

    constructor(
        private router: Router,
        private alertService: AlertService,
        private globalEventsManager: GlobalEventsManager) { }

    ngOnInit() {
    }
}