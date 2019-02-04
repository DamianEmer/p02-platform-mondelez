import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-results',
  templateUrl: './row-results.component.html',
  styleUrls: ['./row-results.component.scss']
})
export class RowResultsComponent implements OnInit {

  @Input()data: any[];

  resultsByColumn : number[] = [];

  avgByRow: number[] = [];

  contadores: number[] = [];

  constructor() { 
  }

  ngOnInit() {
    this.avgByDay();
  }

  avgByDay(){
    let sum: number = 0;
    let acum: number = 0; // contabiliza aquellos campos que tengan valor en el arreglo de dias/semanas
    let acum2: number = 0; // contabiliza aquellos campos que tengan valor
    let sumvolplan: number = 0;
    let sumvolreal: number = 0;
    let sumkgvar: number = 0;
    this.data.map((obj, i )=> {

      sumvolplan+=obj.volplan;
      sumvolreal+=obj.volreal;
      sumkgvar+=obj.kgvar;

      obj.dates.map((date, j) => {
        sum += date.value;
        (date.value != null || date.value > 0 )? acum++ : acum;
        (i==0)? this.resultsByColumn.push(date.value): this.resultsByColumn[j]+=date.value;
      });
    });
    this.resultsByColumn.push(sum);  
    this.resultsByColumn.push(sumvolplan);
    this.resultsByColumn.push(sumvolreal);
    this.resultsByColumn.push(sumkgvar); 
    console.log("Suma Column : ", this.resultsByColumn);
    console.log("Suma Row : ", sum);
  }

}
