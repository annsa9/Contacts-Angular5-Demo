import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { EventsService } from 'angular4-events';
import { contactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  providers: [contactService]
})
export class ContactListComponent implements OnInit {

  contacts: any;

  constructor(private modalService: NgbModal, private events: EventsService, private _contactService: contactService) { }

  ngOnInit() {
    this.events.subscribe('ContactForm').subscribe(() => {
      this.getContacts();      
    });
    this.getContacts();
  }

  open() {
    const modalRef = this.modalService.open(ContactFormComponent);
    modalRef.componentInstance.name = 'World';
  }

  getContacts() {
    let contacts = this._contactService.getContacts();
    contacts = JSON.parse(contacts);
    this.contacts = Object.values(contacts); // Converting object to array
  }

  editContact(contact) {
    console.log(contact);    
    const modalRef = this.modalService.open(ContactFormComponent);
    modalRef.componentInstance.name = 'World';
    this.events.publish('editContact', contact);
  }
}
