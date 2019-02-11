import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-check-report',
  templateUrl: './check-report.component.html',
  styleUrls: ['./check-report.component.scss']
})
export class CheckReportComponent implements OnInit {

  resultSearch: any;

  showTable: boolean;

  constructor() { }

  ngOnInit() {
    this.showTable = false;
  }

  onResult(data: Observable<any>){
    data.subscribe(data => this.resultSearch = data);
    this.showTable = true;
  }

}
