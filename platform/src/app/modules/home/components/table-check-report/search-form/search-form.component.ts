import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { CheckReportService } from 'src/app/shared/services/check-report.service';
import { Store } from '@ngrx/store';
import { AppState } from "../../../../../shared/store/reducers/index";
import { getLines } from 'src/app/shared/store/selectors/line.selectors';
import { Line2 } from 'src/app/shared/models/Line2';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {

  searchForm: FormGroup;

  @Output()result = new EventEmitter();

  lines: Line2[];

  constructor(private fb: FormBuilder, 
    private store: Store<AppState>,
    private checkService: CheckReportService) { 
    this.searchForm = this.fb.group({
      week: ['', Validators.required],
      line: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.store.select(getLines).subscribe(lines => this.lines = lines);
  }

  onSearch():void{
    (this.searchForm.valid)?
      this.result.emit(this.checkService.getLine(this.searchForm.value))
    :alert('Faltan datos');
  }

}
