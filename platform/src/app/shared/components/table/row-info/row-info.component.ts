import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalChartComponent } from '../../modal-chart/modal-chart.component';

@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrls: ['./row-info.component.scss']
})
export class RowInfoComponent implements OnInit {

  @Input()info: any = {};

  @Output() valueAvg = new EventEmitter();

  avg: number;

  constructor( public dialog: MatDialog ) { }

  ngOnInit() { 
    console.log("Informacion ----> ", this.info);
    this.avg = this.calc(this.info.dates);
  }

  calc(turns: any[]):number {
    let avg = 0;
    let divder = 0;
    turns.map(data => {
      avg+=data.value
      if(data.value != null && data.value != 0)
        divder++;
    });
    (divder != 0)? 
      this.valueAvg.emit({id: this.info.id, line: this.info.line, avg: avg/divder}) 
      : this.valueAvg.emit({id: this.info.id, line: this.info.line, avg: 0});
    return (avg/divder);
  }

  showChart(turns: any[]){
    this.dialog.open(ModalChartComponent, {
      data: {
        info: turns.map(v => v.value)
      }
    });
  }

}
