import { Component, OnInit } from '@angular/core';
import { SectorService } from 'src/app/sector.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.css']
})
export class SectorComponent implements OnInit {
  sectorForm:FormGroup;
  constructor(private sectorService:SectorService, private formBuilder:FormBuilder,private router :Router) { }

  ngOnInit() {

    this.sectorForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      brief: ['',Validators.required]
     
    });
  }

    addSector()
    {
      this.sectorService.saveSector(this.sectorForm.value).subscribe(data=>{
        alert('Sector added Successfully.');
      
        
      });
  }
}
