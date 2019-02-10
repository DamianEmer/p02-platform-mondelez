import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { CheckReportService } from 'src/app/shared/services/check-report.service';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  @Output()result = new EventEmitter();

  lines: string[];

  constructor(private fb: FormBuilder, private dataService: DataService, private checkService: CheckReportService) { 
    this.searchForm = this.fb.group({
      week: ['', Validators.required],
      line: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.dataService.getLines().subscribe(value => {
      this.lines = value;
    })
  }

  onSearch():void{
    (this.searchForm.valid)?this.result.emit(this.checkService.getReport()):alert('Faltan datos');
  }

}
