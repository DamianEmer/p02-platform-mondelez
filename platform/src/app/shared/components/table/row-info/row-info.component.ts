import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-info',
  templateUrl: './row-info.component.html',
  styleUrls: ['./row-info.component.scss']
})
export class RowInfoComponent implements OnInit {

  @Input()info: any = {};

  constructor() { }

  ngOnInit() {
    console.log("row-info: ", this.info);
  }

}
