import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-modal-chart',
  templateUrl: './modal-chart.component.html',
  styleUrls: ['./modal-chart.component.scss']
})
export class ModalChartComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() { 
    console.log("names: ",this.data.names);
    console.log("info: ",this.data.info);
   }

   chart = new Chart({
    chart: {
      type: 'column'
    },
    xAxis: {
      categories: this.data.names.map( value => value)
    },
    title: {
      text: 'Linechart'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Line 1',
        data: this.data.info.map(val => val)
      } as Highcharts.SeriesColumnOptions
    ]
  });
}
