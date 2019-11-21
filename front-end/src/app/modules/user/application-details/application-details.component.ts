import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-application-details',
    templateUrl: './application-details.component.html',
    styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {
    @Input() title: string;
    @Input() description: string;
    @Input() routeUrl: string;

    numApps = [];

    constructor() {
    }

    ngOnInit() {
    }

}
