import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';

import { ContactFormComponent } from './contact-form.component';
import { ContactListComponent } from '../contact-list/contact-list.component';
import { OrderByPipe } from '../../Utilities/sort.pipe';
import { contactService } from '../../services/contact.service';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsModule } from 'angular4-events';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

describe('ContactFormComponent', () => {
  let component: ContactFormComponent;
  let fixture: ComponentFixture<ContactFormComponent>;

  @Injectable()
  class MockMyService {
    constructor() { }

    getSomething() {

    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ContactListComponent,
        ContactFormComponent,
        OrderByPipe
      ],
      imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule.forRoot(),
        EventsModule.forRoot()
      ]
    })
    .compileComponents();
  }));

  TestBed.overrideComponent(ContactFormComponent, {
    set: {
      providers: [
        { provide: contactService, useClass: MockMyService }
      ]
    }
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
