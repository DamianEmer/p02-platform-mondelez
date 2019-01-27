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

  formTotal: FormGroup;

  lines: number[];

  operators: any[];

  stoppages: any[];

  constructor(private fb: FormBuilder, private ds: DataService) {

    this.form = fb.group({
      line: ['', Validators.required],
      operator: ['', Validators.required],
      turn: ['', Validators.required],
      date: ['', Validators.required],
      stoppages: this.fb.array([
        this.addStoppagesForm()
      ]),
      sku: this.fb.array([
        this.fb.group({
          productionTime: ['', Validators.required],
          volume: ['', Validators.required],
          description: ['', Validators.required],
          waste: ['', Validators.required],
          retentions: ['', Validators.required],
          reprocess: ['', Validators.required],
          ocurrences: this.fb.array([
            
          ])
        })
      ])
    });

    this.formTotal = this.fb.group({
      OEETotal: [''],
      GETotal: ['']
    });

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

  selectDropDown(select: string) {
    console.log("Linea seleccionada: ",select);
    this.ds.getOperators().subscribe(
      operators => this.operators = operators.filter(
        (operator, i) => {
          return parseInt(select) === operator.idLine;
        }
      )
    );
  }

  addPlannedStoppage(): void {
    this.getStoppages.push(this.addStoppagesForm());
  }



  get getStoppages() {
    return this.form.get('stoppages') as FormArray
  }

  get getLine(){
    return this.form.get('line');
  }

  get getOperator(){
    return this.form.get('operator');
  }

  get getTurn(){
    return this.form.get('turn');
  }

  get getId(){
    return this.getStoppages.get('id');
  }

}
