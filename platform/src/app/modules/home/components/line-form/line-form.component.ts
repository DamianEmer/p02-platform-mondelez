import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

// NGRX
import * as AllActionsLines from "../../../../shared/store/actions/line.actions";
// import * as AllActionsTurns from '../../../../shared/store/actions/turn.actions';
// import * as AllActionsOperators from '../../../../shared/store/actions/operator.actions';
import { AppState } from "../../../../shared/store/reducers/index";
import { getLines } from "../../../../shared/store/selectors/line.selectors";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Line } from 'src/app/shared/models/line';
import { map } from 'rxjs/operators';
import { getOperators } from 'src/app/shared/store/selectors/operator.selectors';
// import { getTurns } from 'src/app/shared/store/selectors/turn.selectors';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  form: FormGroup;

  turns: any[];

  lines$: Observable<Line[]>;

  lines: Line[];

  operators: any[];

  stoppages: any[];

  products: any[];

  turnTime: any;

  constructor(private fb: FormBuilder, 
    private ds: DataService, private store: Store<AppState>) {

      this.store.dispatch(new AllActionsLines.LoadLines());
      // this.store.select(getLines).subscribe(val => this.lines = val);
      this.lines$ = this.store.pipe(select(getLines));

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

    //this.store.select(getTurns).subscribe(val => this.turns = val);

    this.ds.getTurns().subscribe(
      turns => {
        this.turns = turns;
      }
    )

    this.ds.getStoppages().subscribe(
      stoppages => {
        this.stoppages = stoppages;
      }
    )

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
        console.log('itera: ' + i)
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
        ge = (geTotal.reduce((anterior, actual) => anterior + actual)) / (this.turnTime[0].time - sumPlanned) * 100;
        this.form.get('getotal').setValue(ge.toFixed(2));
      });
      //En caso de no haber paros plenados calcula calcular con valor 0
      ge = (geTotal.reduce((anterior, actual) => anterior + actual)) / (this.turnTime[0].time - sumPlanned) * 100;
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
    })
  }

  //Obtiene operadores y productos dependiendo de la linea seleccionada

  selectDropDown(select: string) {
    // this.ds.getOperators().subscribe(
    //   operators => {
    //     this.operators = operators.filter(
    //       (operator, i) => {
    //         return parseInt(select) === operator.idLine;
    //       }
    //     );
    //   }
    // );

    this.store.dispatch(new AllActionsLines.LoadIdLine(select));
    this.store.select(getOperators).subscribe(val => this.operators = val);

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
