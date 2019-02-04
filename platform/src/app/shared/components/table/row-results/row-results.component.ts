import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-results',
  templateUrl: './row-results.component.html',
  styleUrls: ['./row-results.component.scss']
})
export class RowResultsComponent implements OnInit {

  @Input() data: any[];

  resultsByColumn: number[] = [];

  avgByRow: number[] = [];

  contadores: number[] = [];

  constructor() {
  }

  ngOnInit() {
    this.avgByDay();
  }

  avgByDay() {
    let sum: number = 0;
    let sumvolplan: number = 0;
    let sumvolreal: number = 0;
    let sumkgvar: number = 0;
    this.data.map((obj, i) => {

      sumvolplan += obj.volplan;
      sumvolreal += obj.volreal;
      sumkgvar += obj.kgvar;

      obj.dates.map((date, j) => {
        sum+=date.value
        if (i == 0) {
          (date.value != null && date.value != 0)?this.contadores.push(1):this.contadores.push(0);
          this.resultsByColumn.push(date.value);
        } else {
          (date.value != null && date.value != 0)?this.contadores[j]+=1:this.contadores[j]+=0;
          this.resultsByColumn[j] += date.value;
        }
      });
    });
    this.resultsByColumn.push(sum);
    this.resultsByColumn.push(sumvolplan);
    this.resultsByColumn.push(sumvolreal);
    this.resultsByColumn.push(sumkgvar);
  }

}
