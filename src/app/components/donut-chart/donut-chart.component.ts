import { Component, Input, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit {

  @Input() porcentaje: number = 0;
  @Input() backgroundColor: string = '#000';

  barChartOptions: ChartOptions = {
    responsive: true,
    cutoutPercentage: 70,
    legend: {
      display: false
    },
    tooltips: {
      enabled: false
    }
  };
  barChartLabels: Label[] = ['', ''];
  barChartType: ChartType = 'doughnut';
  barChartLegend = true;
  barChartPlugins = [];
 
  barChartData: ChartDataSets[] = [];

  ngOnInit(): void {

    this.barChartData = [
      { 
        data: [this.porcentaje, 100 - this.porcentaje],
        label: 'Best Fruits',
        backgroundColor: [
          this.backgroundColor, '#EBEBEB'
        ],
      }
    ];

  }

  /*data: any;
  barchart: any;
  type = 'doughnut';

  options = {

    responsive: true,
    maintainAspectRatio: true,
    cutoutPercentage: 70,

    elements: {
      center: {
        text: 'Desktop',
        color: '#36A2EB', //Default black
        fontStyle: 'Helvetica', //Default Arial
        sidePadding: 15 //Default 20 (as a percentage)
      }
    },

    tooltips: {
      enabled: false
    },

    legend: {
      display: false
    },

    scales: {
      xAxes: [{
        gridLines: {
          display: false
        },
      }],
      
      yAxes: [{
        gridLines: {
          display: false
        },
        ticks: {
          display: false,
            max: 100,    
            min: 0
        }
      }]
    }
  };

  constructor() { }

  ngOnInit(): void {
    this.data = {
      labels: ['', ''],
      datasets: [{
        label: 'Ahorros',
        data: [12, 88],
        backgroundColor: [
          '#0046C4'
        ],
      }]
    };   
  }*/

}
