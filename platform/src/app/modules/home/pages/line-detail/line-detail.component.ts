import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportsService } from 'src/app/shared/services/reports.service';

@Component({
  selector: 'app-line-detail',
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {

  id: string;

  detailLine: any;

  unplannedStoppages: any[];

  plannedStoppages: any[];

  displayedColumns: string[]= [
    'id', 'description', 'minutes', 'times', 'typeWF'
  ]

  constructor(private router: ActivatedRoute, private repService: ReportsService) {
    this.id = this.router.snapshot.params.id;
    console.log('ID: ',this.id);
  }

  ngOnInit() {
    this.repService.getLineById(parseInt(this.id)).subscribe(
      response => {
        this.detailLine = response;   
        this.unplannedStoppages = response.unplannedStoppages; 
        this.plannedStoppages = response.plannedStoppages; 
      }
    );
  }

}
