import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { Contact } from 'src/modals/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactservice:ContactService ,private router:Router) { }


  contact:Contact[];

  ngOnInit() {
    this.contactservice.getAllContact().subscribe(data=>{
      this.contact=data;
    })
  }
}
