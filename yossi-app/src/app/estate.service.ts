import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Estate} from './estate';

@Injectable()
export class EstateService {

    estatesJsonUrl: string = '/assets/json/properties.json';

    constructor(private http: Http) {}

    getEstates(): Promise<Estate[]> {
        return this.http.get(this.estatesJsonUrl)
            .toPromise()
            .then(
                response => response.json() as Estate[]
            );
    }
}