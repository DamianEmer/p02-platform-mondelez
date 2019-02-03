import { Component, OnInit, Inject } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';

// import { DOCUMENT } from '@angular/common';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  dataSource: any [];

  header_columns_week: string[] = [
    "Linea", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado", "Domingo",
    "Total Semana", "Vol Plan (Kg)", "Vol Real (Kg)", "Kg Val", "Gráfica"
  ]

  data_info: any[];

  constructor(private reportService : ReportsService) {    }

  ngOnInit() {
    this.dataSource = this.reportService.getData();
    this.data_info = this.reportService.getInfoWeek();
  }


}
