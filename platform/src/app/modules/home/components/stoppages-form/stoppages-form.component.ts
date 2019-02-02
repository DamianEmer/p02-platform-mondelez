import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-stoppages-form',
  templateUrl: './stoppages-form.component.html',
  styleUrls: ['./stoppages-form.component.scss']
})
export class StoppagesFormComponent implements OnInit {

  @Input() form: FormGroup;

  descriptions: any[ ] = [
    { id: 1, value: 'opcion1'},
    { id: 2, value: 'opcion2'},
    { id: 3, value: 'opcion3'}
  ]

  constructor() { }

  ngOnInit() {
  }

  get getStoppagesBySku(){
    return this.form.get('stoppages') as FormArray
  }

}
