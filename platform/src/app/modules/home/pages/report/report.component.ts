import { Component, OnInit, Inject } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InfoDay } from 'src/app/shared/models/infoDay';
import { InfoMonth } from 'src/app/shared/models/infoMonth';
import { InfoWeek } from 'src/app/shared/models/infoWeek';

// import { DOCUMENT } from '@angular/common';
// import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

  header_columns_week: string[] = [
    "Linea", "Lunes", "Martes", "Miercoles", "Jueves","Viernes", "Sabado", "Domingo",
    "Total Semana", "Vol Plan (Kg)", "Vol Real (Kg)", "Kg Val"
  ]

  header_columns_weeks: string[] = [
    "Linea", "W1", "W2", "W3", "W4", "W5", 
    "Total Mensual", "Vol Plan (Kg)", "Vol Real (Kg)", "Kg Val"
  ]

  data_info_day: InfoDay [];

  data_info_week: InfoWeek[];

  data_info_month: InfoMonth[];

  searchForm: FormGroup;

  showTbls: boolean = false;

  constructor(private reportService : ReportsService, private fb: FormBuilder) {  
    this.searchForm = this.fb.group({
      week: ['', Validators.required],
      day: ['', Validators.required]
    })
    }

  ngOnInit() { }

  
  onSearch(){
    if(this.searchForm.valid){ 
      this.reportService.getData(this.searchForm.value).subscribe(data => this.data_info_day = data);
      this.reportService.getInfoWeek(this.searchForm.value).subscribe(data => this.data_info_week = data);
      this.reportService.getInfoWeeks(this.searchForm.value).subscribe(data => this.data_info_month = data);
      this.showTbls = true;
    }else
      alert("Faltan datos");
  }


}
