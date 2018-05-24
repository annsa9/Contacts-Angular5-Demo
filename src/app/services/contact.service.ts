import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable()
export class contactService {
    constructor() {
        let contact = localStorage.getItem("contact");
        if (contact == null) {
            let demo = JSON.stringify({});
            localStorage.setItem('contact', demo);
        }
    }

    /**
     * Used to add/edit contact in local storage
     * @param {param} model - A contact object.
     */
    submitContact(model): any {
        let contacts = localStorage.getItem('contact');
        contacts = JSON.parse(contacts);
        contacts = Object.assign(contacts, model); // Merging new contact with contacts object

        contacts = JSON.stringify(contacts);
        localStorage.setItem('contact', contacts);
        let output = localStorage.getItem('contact');
    }

    /**
     * Used to get all the contacts from local storage
     * @return {Object} A object contains contact objects.
     */
    getContacts(): any {
        let contacts = localStorage.getItem('contact');
        return contacts;
    }
} 