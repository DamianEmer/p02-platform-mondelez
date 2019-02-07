import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-special-table',
  templateUrl: './special-table.component.html',
  styleUrls: ['./special-table.component.scss']
})
export class SpecialTableComponent implements OnInit {

  @Input()dataSource: any[];

  displayedColumns: string[] = [
    'linea', 'GE Turno', 'GE Total Dia', 'OEE Turno', 'OEE Total Dia', 
    'Vol Plan (Kg)', 'Vol Real (Kg)', 'Kg Val', 'Grafica'];


  constructor() { }

  ngOnInit() {
  }

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

}
