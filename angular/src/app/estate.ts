import { Broker } from './broker';

export class Estate {
    reference:   string;
    title:       string;
    description: string;
    location:    string;
    price:       number;
    habitable:   number;
    bedrooms:    number;
    bathrooms:   number;
    broker:      Broker;
}