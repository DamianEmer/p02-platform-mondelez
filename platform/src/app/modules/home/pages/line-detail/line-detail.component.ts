import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-detail',
  templateUrl: './line-detail.component.html',
  styleUrls: ['./line-detail.component.scss']
})
export class LineDetailComponent implements OnInit {

  id: string;

  constructor(private router: ActivatedRoute) {
    this.id = this.router.snapshot.params.id;
    console.log('ID: ',this.id);
  }

  ngOnInit() {
  }

}
