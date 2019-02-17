import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Report } from '../../models/report';

import * as exportAsXLSX from 'xlsx';

@Component({
  selector: 'app-special-table',
  templateUrl: './special-table.component.html',
  styleUrls: ['./special-table.component.scss']
})
export class SpecialTableComponent implements OnInit {

  @Input()dataSource: Report[];

  displayedColumns: string[] = [
    'linea', 'GE Turno', 'GE Total Dia', 'OEE Turno', 'OEE Total Dia', 
    'Vol Plan (Kg)', 'Vol Real (Kg)', 'Kg Val', 'Grafica'];


  constructor() { }

  ngOnInit() { } 

  calc(turns: any[]):number {
    let avg = 0;
    let divder = 0;
    turns.map(data => {
      avg+=data.value
      if(data.value != null && data.value != 0)
        divder++;
    })
    return (avg/divder);
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
