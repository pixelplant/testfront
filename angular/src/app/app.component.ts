import {Component, OnInit} from '@angular/core';
import {EstateService} from "./estate.service";

import {Estate} from './estate';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    private currentEstate = null;
    private currentIndex = 0;
    private estates: Estate[];
    private loading: boolean = false;

    constructor(private estateService: EstateService) {}

    /**
     * Load the json data once the app initializes
     */
    ngOnInit() {
        this.loading = true;
        this.estateService.getEstates()
            .then(estates => {
                this.estates = estates;
                this.currentEstate = this.estates[0];
                this.loading = false;
            });
    }

    /**
     * Show next or previous estate details
     *
     * @param {number} counter
     */
    showEstate(counter: number): void {
        let oldIndex: number = this.currentIndex;
        if (this.currentIndex > 0 && counter == -1) {
            this.currentIndex += counter;
        }
        if (this.currentIndex < (this.estates.length - 1) && counter == 1) {
            this.currentIndex += counter;
        }
        if (oldIndex != this.currentIndex) {
            this.currentEstate = this.estates[this.currentIndex];
        }
    }
}