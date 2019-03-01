import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material';
import { Chart } from 'angular-highcharts';
import { logWarnings } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-modal-chart',
  templateUrl: './modal-chart.component.html',
  styleUrls: ['./modal-chart.component.scss']
})
export class ModalChartComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit() { 
  //   console.log('ids: ', this.data.ids);
  //   console.log("names: ",this.data.names);
    console.log("info: ",this.data.info);
   }

   chart = new Chart({
    chart: {
      type: 'column'
    },
    xAxis: {
      // categories: this.data.names.map( value => value)
    },
    title: {
      text: 'Promedios'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      series: {
        point: {
          events:{
            click: function() {
              console.log(this.options);
              location.href='http://localhost:4200/#/report/'+this.options;//cambiar por key
            }
          }
        }
      }
    },
    series: [
      {
        name: 'Promedio',
        data: this.data.info
      } as Highcharts.SeriesColumnOptions
    ]
  });
}
