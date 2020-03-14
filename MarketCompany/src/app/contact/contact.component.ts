import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm:FormGroup;
  constructor(private contactservice:ContactService,  private formBuilder:FormBuilder,private router:Router) { }

  ngOnInit() {

    this.contactForm = this.formBuilder.group({
       id:[''],
      name: ['', Validators.required],
      email: ['', [Validators.email]],
      phone: ['',Validators.required],
      subject: ['',Validators.required],
    });
  }
  
  addFeedback()
  {
    // this.contactservice.saveContact(this.contactForm.value).subscribe(data=>{
      alert('Feedback added Successfully.');
        this.router.navigate(['/home']);
     // });

}
}



