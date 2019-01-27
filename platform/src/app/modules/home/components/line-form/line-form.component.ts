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

  constructor(private fb: FormBuilder, private ds: DataService) {

    this.form = fb.group({
      line: ['', Validators.required],
      operator: ['', Validators.required],
      turn: ['', Validators.required],
      date: ['', Validators.required],
      stoppages: this.fb.array([ ]),
      sku: this.fb.array([
        this.skuForm()
      ]),
      oeetotal: [''],
      getotal: ['']
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

  onSave(){
    console.log(this.form.value);
    this.form.reset();
  }

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: [''],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  skuForm(): FormGroup{
    return this.fb.group({
      productionTime: ['', Validators.required],
      volume: ['', Validators.required],
      description: ['', Validators.required],
      waste: ['', Validators.required],
      retentions: ['', Validators.required],
      reprocess: ['', Validators.required],
      stoppages: this.fb.array([ ]),
      oee: [''],
      ge: [''],
      tld: [''],
      kgMin: [''],
      kgCj: [''],
      wasteTime: [''],
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
    this.getStoppages.push(this.stoppagesForm());
  }

  addSku():void{
    this.getSku.push(this.skuForm());
  }

  // Obtiene paros pleaneados
  get getStoppages() {
    return this.form.get('stoppages') as FormArray
  }

  // Obtiene Linea
  get getLine(){
    return this.form.get('line');
  }

  // Obtiene Operador
  get getOperator(){
    return this.form.get('operator');
  }

  // Obtiene Turno
  get getTurn(){
    return this.form.get('turn');
  }

  // Obtiene lista de productos
  get getSku(){
    return this.form.get('sku') as FormArray;
  }

}
