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
    this.avg = this.calc(this.info.infoWeek);
  }

  calc(turns: any[]):number {
    let avg = 0;
    let divder = 0;
    turns.map(data => {
      avg+=data.valueGE
      if(data.valueGE != null && data.valueGE != 0)
        divder++;
    });
    (divder != 0)? 
      this.valueAvg.emit({key: this.info.id, name: this.info.line, y: avg/divder}) 
      : this.valueAvg.emit({key: this.info.id, name: this.info.line, y: 0});
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
