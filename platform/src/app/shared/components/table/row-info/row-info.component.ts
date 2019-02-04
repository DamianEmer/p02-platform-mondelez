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
    // console.log("row-info: ", this.info);
  }

  calc(turns: any[]):number {
    let avg = 0;
    let divder = 0;
    turns.map(data => {
      avg+=data.value
      if(data.value != null && data.value != 0)
        divder++;
    })
    return (avg/divder);
  }

}
