type SimpleArray = Array<{value: string}>;

/**
 * Estate Broker class
 */
export class Broker {
    name:   string;
    photo:  string;
    phones: SimpleArray;
    emails: SimpleArray;
}