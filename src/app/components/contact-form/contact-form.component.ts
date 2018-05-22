import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Contact } from '../../models/contact.model';
import { EventsService } from 'angular4-events';
import { contactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
  providers: [contactService] 
})
export class ContactFormComponent implements OnInit {

  uniqueId: string = this.generateUUID();  
  model: Contact = new Contact(this.uniqueId, '', '', '','',true);
  isEdit: boolean = false;

  constructor(public activeModal: NgbActiveModal, public events: EventsService, 
    private _contactService: contactService) { 
      this.events.subscribe('editContact').subscribe((data) => {
        this.model = data;
        this.isEdit = true;
        console.log('this.model', this.model);
      });
    }

  ngOnInit() {
  }

  /**
   * To generate unquie number using system time.
   * @return {string} A unique 32 digits number with dashes.
   */
  generateUUID() { // Public Domain/MIT
    let d = new Date().getTime();
    if (typeof performance !== 'undefined' && typeof performance.now === 'function') {
      d += performance.now(); //use high-precision timer if available
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }

  submitContact() {
    let contactId = this.model.contactId;
    const data = {
      [contactId]: this.model
    };
    this._contactService.submitContact(data);
    this.activeModal.close();
    this.events.publish('ContactForm', '');
  }
}
