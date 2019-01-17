import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  form: FormGroup;

  lines: number[];

  operators: any[];

  stoppages: any[];

  constructor( private fb: FormBuilder, private ds: DataService) {

    this.form = fb.group({
      line: ['', Validators.required],
      operator: ['', Validators.required],
      turn: ['', Validators.required],
      scheduleStoppages: this.fb.array([
        this.addStoppagesForm()
      ]),
      sku: this.fb.array([
        this.fb.group ({
          productionTime: ['', Validators.required],
          volume: ['', Validators.required],
          description: ['', Validators.required],
        })
      ])
    })

  }

  ngOnInit() {

    this.ds.getLines().subscribe(
      lines => {
        this.lines = lines;
      }
    );
    
    this.ds.getStoppages().subscribe(
      stoppages => {
        this.stoppages = stoppages;
      }
    )
   
  }

  addStoppagesForm(): FormGroup {
      return this.fb.group({
        id: [''],
        minutes: ['', Validators.required],
        times: ['', Validators.required]
      })
  }

  onSave():void {
    console.log(this.form.value);
  } 

  selectDropDown(select: string){
    this.ds.getOperators().subscribe(
      operators => this.operators = operators.filter(
        (operator, i) => { 
          return parseInt(select) === operator.idLine;
        }
      )
    );
  }

  addStoppageClick(): void {
    this.getScheduleStoppages.push(this.addStoppagesForm());
  }

  get getScheduleStoppages(){
    return this.form.get('scheduleStoppages') as FormArray
  }

}
