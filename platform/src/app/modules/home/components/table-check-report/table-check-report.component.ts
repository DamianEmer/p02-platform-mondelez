import { Component, OnInit, Input } from '@angular/core';
import { CheckReportService } from 'src/app/shared/services/check-report.service';

@Component({
  selector: 'app-table-check-report',
  templateUrl: './table-check-report.component.html',
  styleUrls: ['./table-check-report.component.scss']
})
export class TableCheckReportComponent implements OnInit {

  titles: string[] = [
    "Line designation",
    "Product designation",
    "Line-Global Waterfall Official",
    "Product-Global Waterfall Official",
    "Day",
    "Shift",
    "Product Speed (Metric Tons/Ho)",
    "Maximum time (Minutes)",
    "Legal non Operating time (Minutes)",
    "No Demand (Minutes)",
    "Force Majeure (Minutes)",
    "Minutes used (Minutes)",
    "Planned Maintenance (Minutes)",
    "Planned Autonomoue Maintenance",
    "Sanitation (Minutes)",
    "Changeovers (Minutes)",
    "Planned Stops (Minutes)",
    "Consumables replacement (Minutes)",
    "Start and Finish Production (Minutes)",
    "Production Time (Minutes)",
    "Minor Stoppages (Minutes)",
    "Breakdowns (Minutes)",
    "Operational losses (Minutes)",
    "Line Delays (Minutes)",
    "Labor Management Losses (Minutes)",
    "Speed Loss (Minutes)",
    "Quality Loss (Minutes)",
    "Operating Time (Minutes)",
    "LU",
    "GE",
    "OEE",
    "Volume defect free (Kg)",
    "Volume defect losses (Kg)",
    "producto terminado PZ",

  ];

  subtitles: string[] = [
    "GWF (Reserved)","","L","P","D","S","","1","2","",
    "4","","6","7","8","9","10","11","12","13","14","15","16","17","18","19",
    "","","","23","24",""
  ]

  days: string[] = [
    "Lunes 1",
    "Lunes 2",
    "Lunes 3",
    "Martes 1",
    "Martes 2",
    "Martes 3",
    "Miercoles 1",
    "Miercoles 2",
    "Miercoles 3",
    "Jueves 1",
    "Jueves 2",
    "Jueves 3",
    "Viernes 1",
    "Viernes 2",
    "Viernes 3",
  ]

  @Input()report: any;

  constructor(private checkReportService: CheckReportService) { }

  ngOnInit() {
    
  }



}
