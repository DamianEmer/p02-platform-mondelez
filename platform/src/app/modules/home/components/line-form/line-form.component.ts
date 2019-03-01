import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

// NGRX
import { Store } from '@ngrx/store';
import { AppState } from "../../../../shared/store/reducers/index";
// actions
import * as AllActionsStoppages from '../../../../shared/store/actions/stoppage.actions';
import * as AllActionsOperators from '../../../../shared/store/actions/operator.actions';
//Selectors
import { getLines } from "../../../../shared/store/selectors/line.selectors";
import { getOperatorsById } from 'src/app/shared/store/selectors/operator.selectors';
import { getTurns } from 'src/app/shared/store/selectors/turn.selectors';
import { getStoppages } from 'src/app/shared/store/selectors/stoppage.selector';
//Models
import { Turn } from 'src/app/shared/models/turn';
import { Operator } from 'src/app/shared/models/operator';
import { Stoppage } from 'src/app/shared/models/stoppage';
import { Line2, Product, BreakDown } from 'src/app/shared/models/Line2';
import { MatSnackBar } from '@angular/material';
import { SaveConfirmModalComponent } from 'src/app/shared/components/save-confirm-modal/save-confirm-modal.component';
import { DatePipe } from '@angular/common';
import { ErrorDialogService } from 'src/app/shared/services/error-dialog.service';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnChanges, OnInit {

  form: FormGroup; // formulario principal para registro

  turns: Turn[]; // Almacena los turnos

  lines: Line2[]; // Almacenara todas las lineas

  operators: Operator[]; // Almacenara los operadores de la linea seleccionada

  stoppages: Stoppage[]; // Almacena los paros planeados

  products: Product[]; // Almacena los productos (sku's) de la linea seleccionada

  unplannedStoppages: BreakDown[]; // Almacena los breakdowns de la linea seleccionada

  turnTime: number; // Tiempo del turno seleccionado

  @Input() record: any; // Captura la llegada del registro a editar

  private _record: any; // Almacena el registro a editar

  showBtnEdit: boolean; // Bandera para hacer cambio de los botones entre editar y nuevo

  emptyStoppages: boolean;

  constructor(private fb: FormBuilder,
    private ds: DataService,
    private store: Store<AppState>,
    private confirm: MatSnackBar,
    private errorDialog: ErrorDialogService) {
    this.showBtnEdit = false;
    this.emptyStoppages = false;
    this.store.dispatch(new AllActionsStoppages.LoadStoppages())
    this.store.dispatch(new AllActionsOperators.LoadOperators());
    this.store.select(getLines).subscribe(lines => this.lines = lines);
    this.store.select(getTurns).subscribe(turns => this.turns = turns);
    this.store.select(getStoppages).subscribe(stoppages => this.stoppages = stoppages);

    this.initForm();

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChange')
    this.showBtnEdit = true;
    const record: SimpleChange = changes.record;
    this._record = record.currentValue;
    this.editRecord();
    // this.onTotalCal();
  }

  ngOnInit() {
    console.log('ngOnInit')
    if (!this.showBtnEdit)
      this.onTotalCal(); // Metodo con observable interno para detectar cambios en cada SKU y recalcular valores totales
  }

  initForm(): void {
    this.form = this.fb.group({
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

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: ['', Validators.required],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  onSave() {
    if (this.form.valid) {
      this.ds.addRecord(this.form.value).subscribe(response => {
        this.confirm.openFromComponent(SaveConfirmModalComponent, {
          duration: 1500
        })
      });
      //En caso de error mandar igual mensaje de error
      this.resetForm();
    }
  }

  onRemoveStoppages(): void {
    this.getSku.controls.forEach(sku => {
      const stoppages = sku.get('stoppages') as FormArray;
      stoppages.controls.splice(0, stoppages.controls.length);
    });
    this.getStoppages.controls.splice(0, this.getStoppages.controls.length);
  }

  editRecord(): void {
    const pipe = new DatePipe('en-US');
    this.loadSelects(this._record.idLine);
    this.form.patchValue({
      line: this._record.idLine,
      operator: this._record.nameOperator,
      turn: this._record.turn,
      date: new Date(pipe.transform(this._record.date, 'dd/MM/yyyy')),
      getotal: this._record.geTotal,
      oeetotal: this._record.oeeTotal
    });

    console.log("data: ", this.form.get('date').value);

    this.form.setControl('stoppages', this.existStoppages(this._record.stoppages));
    this.form.setControl('sku', this.existProducts(this._record.sku));

    // this.form.get('line').setValue(this._record.idLine);
    // this.getOperator.setValue(this._record.nameOperator);
    // this.getTurn.setValue(this._record.turn);

  }

  sendUpdateRecord(): void {
    this.ds.updateRecord(this._record.id, this.form.value).subscribe(response => {
      this.confirm.openFromComponent(SaveConfirmModalComponent, {
        duration: 1500
      })
    });
  }

  onTotalCal() {
    console.log('calculos.......')
    this.getSku.valueChanges.subscribe(data => {
      let oeeTotal: any[] = [];
      let geTotal: any[] = [];
      let sumPlanned = 0;
      let oee = 0;
      let ge = 0;

      for (let i = 0; i <= this.getSku.length - 1; i++) {
        console.log('for....')
        oeeTotal.push(parseFloat(this.getSku.controls[i].get('oee').value));
        geTotal.push(parseFloat(this.getSku.controls[i].get('tld').value));
      }

      oee = (oeeTotal.reduce((anterior, actual) => anterior + actual)) / this.getSku.length;
      this.form.get('oeetotal').setValue(oee.toFixed(2));

      this.form.get('stoppages').valueChanges.subscribe((data: any[]) => {
        console.log('deteccion de cambios....')
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

  //Obtiene operadores y productos dependiendo de la linea seleccionada
  selectDropDown(select: number) {
    this.loadSelects(select);
  }

  loadSelects(id: number): void {
    this.store.select(getOperatorsById, { id: id })
      .subscribe(operators => this.operators = operators);
    let line = this.lines.find(line => line.id === id);
    this.products = line.products;
    this.unplannedStoppages = line.breakdowns;
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

  existProducts(products: any[]): FormArray {
    // console.log('PRODUCTS LIST ::> ', products);
    const formArray = new FormArray([]);
    products.forEach(p => {
      formArray.push(this.fb.group({
        productionTime: p.productionTime,
        volume: p.volume,
        description: p.idDescription,
        waste: p.waste,
        retentions: p.retentions,
        reprocess: p.reprocess,
        stoppages: this.existStoppages(p.stoppages),
        oee: p.oee,
        ge: p.ge,
        tld: p.tld,
        kgMin: p.kgmin,
        kgCj: p.kgcj,
        lossSpeed: p.lossSpeed,
        idealvolume: p.idealvolume
      }))
    })
    return formArray;
  }

  existStoppages(stoppages: any[]): FormArray {
    const formArray = new FormArray([]);
    stoppages.forEach(stop => {
      formArray.push(this.fb.group({
        id: stop.id,
        minutes: stop.minutes,
        times: stop.times
      }));
    });

    return formArray;
  }

  resetForm(): void {
    this.onRemoveStoppages();
    this.form.reset();
  }

  // Obtiene paros pleaneados
  get getStoppages() {
    return this.form.get('stoppages') as FormArray
  }

  get getBreakdowns() {
    console.log('ESTRUCTURA SKU: ', this.getSku);
    return this.getSku.get('stoppages') as FormArray;
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
