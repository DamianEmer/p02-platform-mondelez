import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from "../../../../shared/store/reducers/index";
// actions
import * as AllActionsLines from "../../../../shared/store/actions/line.actions";
import * as AllActionsStoppages from '../../../../shared/store/actions/stoppage.actions';
//Selectors
import { getLines } from "../../../../shared/store/selectors/line.selectors";
import { getOperators } from 'src/app/shared/store/selectors/operator.selectors';
import { getTurns } from 'src/app/shared/store/selectors/turn.selectors';
import { getStoppages } from 'src/app/shared/store/selectors/stoppage.selector';
import { getProducts } from 'src/app/shared/store/selectors/product.selectors';
import { getUnplannedStoppage } from 'src/app/shared/store/selectors/unplannedStoppage.selectors';
//Models
import { Line } from 'src/app/shared/models/line';
import { Turn } from 'src/app/shared/models/turn';
import { Operator } from 'src/app/shared/models/operator';
import { Stoppage } from 'src/app/shared/models/stoppage';
import { Product } from 'src/app/shared/models/product';
import { UnplannedStoppage } from 'src/app/shared/models/unplannedStoppage';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  form: FormGroup;

  turns: Turn[];

  lines: Line[];

  operators: Operator[];

  stoppages: Stoppage[];

  products: Product[];

  unplannedStoppages: UnplannedStoppage[];

  turnTime: number;

  constructor(private fb: FormBuilder, 
    private store: Store<AppState>) {

      this.store.dispatch(new AllActionsLines.LoadLines());
      this.store.dispatch(new AllActionsStoppages.LoadStoppages())
      this.store.select(getLines).subscribe(lines => this.lines = lines);
      this.store.select(getTurns).subscribe(turns => this.turns = turns);
      this.store.select(getStoppages).subscribe(stoppages => this.stoppages = stoppages);

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

    this.onTotalCal(); // Metodo con observable interno para detectar cambios en cada SKU y recalcular valores totales

  }

  onSave() {
    console.log(this.form.value);
  }

  onTotalCal() {
    this.getSku.valueChanges.subscribe(data => {
      let oeeTotal: any[] = [];
      let geTotal: any[] = [];
      let sumPlanned = 0;
      let oee = 0;
      let ge = 0;

      for (let i = 0; i <= this.getSku.length - 1; i++) {
        oeeTotal.push(parseFloat(this.getSku.controls[i].get('oee').value));
        geTotal.push(parseFloat(this.getSku.controls[i].get('tld').value));
      }

      oee = (oeeTotal.reduce((anterior, actual) => anterior + actual)) / this.getSku.length;
      this.form.get('oeetotal').setValue(oee.toFixed(2));

      this.form.get('stoppages').valueChanges.subscribe((data: any[]) => {
        sumPlanned = 0;
        data.map(val => {
          this.stoppages.filter(stop => {
            if (stop.id === val.id) {
              if ('z' === stop.type) {
                sumPlanned += (val.minutes * val.times);
              }
            }
          })
        })
        ge = (geTotal.reduce((anterior, actual) => anterior + actual)) / (this.turnTime - sumPlanned) * 100;
        this.form.get('getotal').setValue(ge.toFixed(2));
      });
      //En caso de no haber paros plenados calcula calcular con valor 0
      ge = (geTotal.reduce((anterior, actual) => anterior + actual)) / (this.turnTime - sumPlanned) * 100;
      this.form.get('getotal').setValue(ge.toFixed(2));
    })
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
      idealvolume: ['']
    })
  }

  //Obtiene operadores y productos dependiendo de la linea seleccionada

  selectDropDown(select: string) {

    this.store.dispatch(new AllActionsLines.LoadIdLine(select));
    this.store.select(getOperators).subscribe(operators => this.operators = operators);
    this.store.select(getProducts).subscribe(products => this.products = products);
    this.store.select(getUnplannedStoppage).subscribe(unplannedStops => this.unplannedStoppages = unplannedStops);
  }

  // Obtiene valor del tiempo del turno seleccionado
  selectDropTurn(select: string) {
    let obj: any = this.turns.find(turn => parseInt(select) === turn.id);
    this.turnTime = obj.time;
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
