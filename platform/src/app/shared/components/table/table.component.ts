import { Component, OnInit, Input } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalChartComponent } from '../modal-chart/modal-chart.component';
import { OperationsService } from '../../services/operations.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()header_columns: string[];

  @Input()info: any;

  avgsTotal: any[] = [];
  
  constructor(public dialog: MatDialog, private operationService: OperationsService) { }

  ngOnInit() { }

  addAvgsTotalForGraphic(value: number):void{
    this.avgsTotal.push(value);
    this.avgsTotal = this.avgsTotal.sort((a,b)=> b.avg - a.avg)
  }

  showChart(turns?: any[]){
    this.dialog.open(ModalChartComponent, {
      data: {
        names: this.avgsTotal.map(v => v.line),
        info: this.avgsTotal.map(v=>v.avg)
      }
    });
  }

}
