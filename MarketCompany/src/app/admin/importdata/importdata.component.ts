// import { Component, OnInit } from '@angular/core';
// import { UploadService } from 'src/app/upload.service';
// import { FormGroup, FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-importdata',
//   templateUrl: './importdata.component.html',
//   styleUrls: ['./importdata.component.css']
// })
// export class ImportdataComponent implements OnInit {
//   excelUploadForm:FormGroup;
//   constructor(private stockPriceService:UploadService ){}
//    file:File;
//    isError:boolean =false;
//    errorMessage:string="";
//    ngOnInit(){
//      this.excelUploadForm=new FormGroup({
//        excelFileUpload:new FormControl("",[Validators.required])
//      })
//  }
//  onFileChange(e)
//  {
//    this.file =e.target.files[0];
//  }
//  UploadData(){
//    const UploadSheetData =new FormData();
//    UploadSheetData.append("stocksSheet",this.file,this.file.name);
//    this.stockPriceService.uploadStocksSheet(UploadSheetData).subscribe(data =>{
//      console.log("Uploaded");
//    })
//  }
//  }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UploadService } from 'src/app/upload.service';

@Component({
  selector: 'app-importdata',
  templateUrl: './importdata.component.html',
  styleUrls: ['./importdata.component.css']
})
export class ImportdataComponent implements OnInit {
  importdataForm : FormGroup;
  constructor(private uploadService:UploadService) { }
  
  file : File;
  isError: boolean = false;
  errorMessage: String = "";
  ngOnInit() {
    //bsCustomFileInput.init();
    this.importdataForm = new FormGroup({
       excelfile: new FormControl("",[Validators.required])
    });
  }
onFileChange(e){
  this.file = e.target.files[0];
}
// uploadData(){
//   const uploadSheetData = new FormData();
//   uploadSheetData.append("stocksSheet", this.file, this.file.name);
// }
  importData(){ 
     const uploadSheetData = new FormData();
    uploadSheetData.append("stocksSheet", this.file, this.file.name);
    this.uploadService.uploadStocksSheet(uploadSheetData).subscribe(data => {
      console.log("uploaded");
      alert("Imported Successfully");
      console.log(data);
    });
  }

  
}
