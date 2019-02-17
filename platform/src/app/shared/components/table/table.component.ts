import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import {MatDialog} from '@angular/material';
import { ModalChartComponent } from '../modal-chart/modal-chart.component';
import { OperationsService } from '../../services/operations.service';
import { Report } from '../../models/report';

import * as exportAsXLSX from 'xlsx';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input()header_columns: string[];

  @Input()reports: Report[];

  avgsTotal: any[] = [];

  constructor(
    public dialog: MatDialog) { }

  ngOnInit() { }

  addAvgsTotalForGraphic(value: number):void{
    this.avgsTotal.push(value);
    this.avgsTotal = this.avgsTotal.sort((a,b)=> b.y - a.y)
  }

  showChart(turns?: any[]){
    this.dialog.open(ModalChartComponent, {
      data: {
        // ids: this.avgsTotal.map(v => v.id),
        // names: this.avgsTotal.map(v => v.line),
        info: this.avgsTotal
      }
    });
  }

  @ViewChild('table') table: ElementRef;

  exportAsXLSX():void {
    console.log(this.table);
    const ws: exportAsXLSX.WorkSheet = exportAsXLSX.utils.table_to_sheet(this.table.nativeElement);
    const wb: exportAsXLSX.WorkBook = exportAsXLSX.utils.book_new();
    exportAsXLSX.utils.book_append_sheet(wb, ws, 'Sheet 1');

    exportAsXLSX.writeFile(wb, "sheet1.xlsx");

 }
}
