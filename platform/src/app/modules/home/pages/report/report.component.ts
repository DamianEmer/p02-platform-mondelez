import { Component, OnInit, Inject } from '@angular/core';
import { ReportsService } from 'src/app/shared/services/reports.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Report } from 'src/app/shared/models/report';
import { DataSharedService } from 'src/app/shared/services/data-shared.service';

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

  data_reports: Report[];

  searchForm: FormGroup;

  showTbls: boolean = false;

  constructor(private reportService : ReportsService, 
    private fb: FormBuilder, 
    private dataShared: DataSharedService) {  
    this.searchForm = this.fb.group({
      week: ['', Validators.required],
      day: ['', Validators.required]
    })
    }

  ngOnInit() { }

  
  onSearch(){
    if(this.searchForm.valid){ 
      this.dataShared.setCurrentDate(this.searchForm.value);
      this.reportService.getReports().subscribe((reports: Report[])=> {
        this.data_reports = reports;
      })
      this.showTbls = true;
    }else
      alert("Faltan datos");
  }


}
