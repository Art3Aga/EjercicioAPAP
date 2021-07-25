import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit {

  constructor() { }
  type = 'doughnut';
  options = {
     responsive: true,
     maintainAspectRatio: true,
     cutoutPercentage: 40,
     scales: {
         yAxes : [{
             ticks : {
                 max : 100,    
                 min : 0
             }
         }]
     }
 };
  data:any;
  barchart:any;
  ngOnInit(){
    this.data = {
      labels: ['hola', 'ola'], //months
      datasets: [{
        label: "Angular 11",
        data: [5, 10],
        backgroundColor: "#f38b4a",
      }]
    };   
  }

}
