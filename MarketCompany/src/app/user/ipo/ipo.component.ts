import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { IposerviceService } from 'src/app/iposervice.service';

@Component({
  selector: 'app-ipo',
  templateUrl: './ipo.component.html',
  styleUrls: ['./ipo.component.css']
})
export class IpoComponent implements OnInit {
  ipoForm:FormGroup;
  constructor(private iposervice:IposerviceService , private formBuilder:FormBuilder) { }

  ngOnInit() {

    this.ipoForm = this.formBuilder.group({
      id: ['', Validators.required],
      companyName: ['', Validators.required],
     stockExchange : ['',Validators.required],
      pricePerShare: ['',Validators.required],
      totalStocks: ['', [Validators.required]],
      remarks: ['', Validators.required]
    });
  }


  addipo()
    {

        this.iposervice.saveIpo(this.ipoForm.value).subscribe(data=>{
          alert('Ipo added Successfully.');
  
      });
  }
}

