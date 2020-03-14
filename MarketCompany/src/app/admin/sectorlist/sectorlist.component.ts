import { Component, OnInit } from '@angular/core';
import { Sector } from 'src/modals/sector';
import { SectorService } from 'src/app/sector.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sectorlist',
  templateUrl: './sectorlist.component.html',
  styleUrls: ['./sectorlist.component.css']
})
export class SectorlistComponent implements OnInit {
  sectors : Sector[];
  constructor(private sectorService :SectorService, private router : Router) { }

  ngOnInit() {
    this.sectorService.getAllSector().subscribe(data => {
      this.sectors=data;

    });


  }
  deleteSector(sector:Sector){
    this.sectorService.deleteSector(sector.id).subscribe();
    this.sectors=this.sectors.filter(i=> i !== sector)
    alert("sector deleted sucessfully");
  }

  
  updateSector(sector:Sector){

   localStorage.removeItem("sectorID");
   localStorage.setItem("sectorID",sector.id.toString());
   this.router.navigate(['update-sector']);
   
 }

}
