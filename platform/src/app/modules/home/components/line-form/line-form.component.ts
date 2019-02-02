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

  turns: any[];

  lines: any[];

  operators: any[];

  stoppages: any[];

  products: any[];

  turnTime: any;

  constructor(private fb: FormBuilder, private ds: DataService) {

    this.form = fb.group({
      line: ['', Validators.required],
      operator: ['', Validators.required],
      turn: ['', Validators.required],
      date: ['', Validators.required],
      stoppages: this.fb.array([]),
      sku: this.fb.array([
        this.skuForm()
      ]),
      oeetotal: [''],
      getotal: ['']
    });

  }

  ngOnInit() {

    this.ds.getTurns().subscribe(
      turns => {
        this.turns = turns;
      }
    )

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

  onSave() {
    console.log(this.form.value);
    //this.form.reset();
  }

  onTotalCal() {
    let oeeTotal: any[] = [];
    let geTotal: any[] = [];
    let sumPlanned = 0;
    let oee = 0;
    let ge = 0;
    for (let i = 0; i <= this.getSku.length - 1; i++) {
      console.log('itera: '+i)
      oeeTotal.push(this.getSku.controls[i].get('oee').value);
      geTotal.push(this.getSku.controls[i].get('tld').value);
    }
    oee = (oeeTotal.reduce((anterior, actual) => anterior + actual)) / this.getSku.length;
    console.log("oee", oeeTotal.reduce((anterior, actual) => anterior + actual));
    this.form.get('oeetotal').setValue(oee.toFixed(2));

    this.form.get('stoppages').valueChanges.subscribe((data: any[]) => {
      sumPlanned = 0;
      data.map(val => {
        sumPlanned += (val.minutes * val.times);
      })
    });

    ge = (geTotal.reduce((anterior, actual) => anterior + actual)) / (this.turnTime[0].time - sumPlanned)*100;
    console.log("ge",geTotal);
    this.form.get('getotal').setValue(ge.toFixed(2));
  }

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: [''],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  skuForm(): FormGroup {
    return this.fb.group({
      productionTime: ['', Validators.required],
      volume: ['', Validators.required],
      description: ['', Validators.required],
      waste: [''],
      retentions: [''],
      reprocess: [''],
      stoppages: this.fb.array([]),
      oee: [''],
      ge: [''],
      tld: [''],
      kgMin: [''],
      kgCj: [''],
      lossSpeed: [''],
    })
  }

  //Obtiene valores dependiendo de la linea seleccionada

  selectDropDown(select: string) {
    // console.log("Linea seleccionada: ",select);
    this.ds.getOperators().subscribe(
      operators => {
        this.operators = operators.filter(
          (operator, i) => {
            return parseInt(select) === operator.idLine;
          }
        );
      }
    );

    this.ds.getProducts().subscribe(
      products => {
        this.products = products.filter(
          (product, i) => {
            return parseInt(select) === product.idLine;
          }
        );
      }
    )
  }

  // Obtiene valor del tiempo del turno seleccionado
  selectDropTurn(select: string) {
    this.ds.getTurns().subscribe(turns => {
      this.turnTime = this.turns.filter(turn => parseInt(select) === turn.id);
    })
  }

  // Agrega formulario de paro planeado
  addPlannedStoppage(): void {
    this.getStoppages.push(this.stoppagesForm());
  }

  // Agrega formulario para nuevo SKU
  addSku(): void {
    this.getSku.push(this.skuForm());
  }

  // Obtiene paros pleaneados
  get getStoppages() {
    return this.form.get('stoppages') as FormArray
  }

  // Obtiene Linea
  get getLine() {
    return this.form.get('line');
  }

  // Obtiene Operador
  get getOperator() {
    return this.form.get('operator');
  }

  // Obtiene Turno
  get getTurn() {
    return this.form.get('turn');
  }

  // Obtiene lista de productos
  get getSku() {
    return this.form.get('sku') as FormArray;
  }

}
