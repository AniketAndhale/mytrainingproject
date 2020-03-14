import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { SectorService } from 'src/app/sector.service';
import { Router } from '@angular/router';
import { Sector } from 'src/modals/sector';

@Component({
  selector: 'app-update-sector',
  templateUrl: './update-sector.component.html',
  styleUrls: ['./update-sector.component.css']
})
export class UpdateSectorComponent implements OnInit {



  updateSector : FormGroup;
  constructor(private formBuilder : FormBuilder,private sectorService:SectorService, private router : Router) { }

  ngOnInit() {
    this.updateSector = this.formBuilder.group({
      id : ['',Validators.required],
      name: ['',Validators.required],
      brief: ['',Validators.required]
  });
  const id = localStorage.getItem('sectorID');
  if(+id>0){
    this.sectorService.getSectorById(+id).subscribe(sector => {
      this.updateSector.patchValue(sector);
    });
}

}
update(sector:Sector){
  this.sectorService.updateSector(this.updateSector.value).subscribe( i =>{
    this.router.navigate(['sectorlist']);
    alert("Sector updated..")
  })
}


}