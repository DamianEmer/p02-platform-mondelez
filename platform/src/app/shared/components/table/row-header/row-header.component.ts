import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-header',
  templateUrl: './row-header.component.html',
  styleUrls: ['./row-header.component.scss']
})
export class RowHeaderComponent implements OnInit {

  @Input()header_columns: string[];
  
  constructor() { }

  ngOnInit() {
  }

}
