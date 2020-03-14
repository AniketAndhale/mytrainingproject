import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-chart12',
  templateUrl: './chart12.component.html',
  styleUrls: ['./chart12.component.css']
})
export class Chart12Component  {

  title = 'charts';
  data = [{
          name: 'Sector',
          data: [845, 450, 555, 444, 777, 877, 944, 600, 210, 789, 456, 654]
       },{
          name: 'NSE',
          data: [677, 700, 677, 877, 455, 778, 888, 300, 785, 488, 550, 654]
       }];
  highcharts = Highcharts;
  chartOptions = {   
    chart: {
       type: "column"
    },
    title: {
       text: "Monthly Site Visitor"
    },
    xAxis:{
       categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    yAxis: {          
       title:{
          text:"comparing"
       } 
    },
    series: this.data
  };
}
