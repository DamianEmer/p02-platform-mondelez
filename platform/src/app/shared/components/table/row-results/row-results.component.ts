import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-results',
  templateUrl: './row-results.component.html',
  styleUrls: ['./row-results.component.scss']
})
export class RowResultsComponent implements OnInit {

  @Input() data: any[]; // Data para avaluar

  resultsByColumn: number[] = []; // Almacena sumatorias por columna

  avgByRow: number[] = []; // Almacena promedio por fila

  avgByColumn: number[] = []; // Almacena promedio por columna

  contadores: number[] = []; // Almacena contadores de numero de valores por columna para promediar

  constructor() {
  }

  ngOnInit() {
    this.avgByDay();
  }

  avgByDay() {
    let sumvolplan: number = 0;
    let sumvolreal: number = 0;
    let sumkgvar: number = 0;
    
    let acumTotalHorizontal: number = 0;
    let sumHorizontal: number = 0;

    this.data.map((obj, i) => {   

      sumvolplan += obj.volplan;
      sumvolreal += obj.volreal;
      sumkgvar += obj.kgvar;

      sumHorizontal += this.calc(obj.dates);
      (this.calc(obj.dates) != 0)?acumTotalHorizontal++ : acumTotalHorizontal;

      obj.dates.map((date, j) => {        
        if (i == 0) {
          (date.value != null && date.value != 0)?this.contadores.push(1):this.contadores.push(0);
          this.resultsByColumn.push(date.value);
        } else {
          (date.value != null && date.value != 0)?this.contadores[j]+=1:this.contadores[j]+=0;
          this.resultsByColumn[j] += date.value;
        }
      });
    });
    this.contadores.push(acumTotalHorizontal);
    this.resultsByColumn.push(sumHorizontal);
    this.resultsByColumn.push(sumvolplan);
    this.resultsByColumn.push(sumvolreal);
    this.resultsByColumn.push(sumkgvar);
    this.avgTotalByColumn();
  }

  calc(turns: any[]):number {
    let avg = 0;
    let divder = 0;
    turns.map(data => {
      avg+=data.value
      if(data.value != null && data.value != 0)
        divder++;
    })
    return (divder == 0)? 0: (avg/divder);
  }

  avgTotalByColumn():void{
    this.resultsByColumn.map((value, i) => {
      (i <= this.contadores.length-1)? 
        this.avgByColumn.push((value/this.contadores[i])): this.avgByColumn.push(value)
    });
  }

}
