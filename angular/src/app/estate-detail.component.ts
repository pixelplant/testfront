import { Component, Input } from '@angular/core';
import { Estate } from './estate';

@Component({
    selector: 'estate-detail',
    templateUrl: './estate-detail.component.html'
})
export class EstateDetailComponent {
    @Input() estate: Estate;
}