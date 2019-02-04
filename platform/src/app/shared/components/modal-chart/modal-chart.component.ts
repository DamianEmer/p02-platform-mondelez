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

  ngOnInit() {  }

   chart = new Chart({
    chart: {
      type: 'line'
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
        data: this.data.info.map(v=> v.value)
      } as Highcharts.SeriesColumnOptions
    ]
  });
}
