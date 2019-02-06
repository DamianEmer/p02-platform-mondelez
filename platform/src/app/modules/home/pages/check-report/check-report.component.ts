import { Component, OnInit } from '@angular/core';

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

  onResult(data: any){
    this.resultSearch = data;
    this.showTable = true;
  }

}
