import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { AppState } from 'src/app/shared/store/reducers';
import { Store } from '@ngrx/store';
import * as AllActionsOperator from '../../../../shared/store/actions/operator.actions';
import { getLines } from 'src/app/shared/store/selectors/line.selectors';
import { getOperators } from 'src/app/shared/store/selectors/operator.selectors';
import { Operator } from 'src/app/shared/models/operator';
import { Line2 } from 'src/app/shared/models/Line2';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-corrections',
  templateUrl: './corrections.component.html',
  styleUrls: ['./corrections.component.scss']
})
export class CorrectionsComponent implements OnInit {

  form: FormGroup;

  formSearch: FormGroup;

  lines: Line2[];

  operators: Operator[];

  records: any[];

  showBtnEdit: boolean

  showFormRecord: boolean;

  showListRecords: boolean;

  record: any;


  constructor(
    private authService: AuthService,
    private dataService: DataService,
    private fb: FormBuilder,
    private router: Router,
    private store: Store<AppState>) {
    this.showBtnEdit = false;
    this.showFormRecord = false;
    this.showListRecords = false;
  }

  ngOnInit() {
    this.store.select(getLines).subscribe(lines => this.lines = lines);
    this.store.dispatch(new AllActionsOperator.LoadOperators());
    this.store.select(getOperators).subscribe(operators => this.operators = operators);

    this.initFormOperator();
    this.initFormSearch();

  }

  initFormOperator(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      line: ['', Validators.required]
    });
  }

  initFormSearch(): void {
    this.formSearch = this.fb.group({
      week: ['', Validators.required],
      day: ['', Validators.required]
    });
  }

  onSave(): void {
    // console.log("Nuevo operador: ", this.form.value);
    this.resetForm();
  }

  fillValue(lineSelected): void {
    // console.log("Linea seleccionada: ", lineSelected);
  }

  onUpdate(): void {
    // console.log("Actualizar operador: ", this.form.value)
  }

  onSearchRecords(): void {
    this.showListRecords = true;
    // console.log("Semana: ", this.getWeek.value, " Day: ", this.getDay.value);
    this.dataService.getRecords(this.getWeek.value, this.getDay.value)
      .subscribe(records => {
        this.records = records;
      })
  }

  onClickLogout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  onEditOperator(id: number): void {
    this.showBtnEdit = true;
    let operator = this.operators.find(ope => ope.id === id);
    this.form.patchValue({
      name: operator.name,
      line: operator.line
    })
  }

  onEditLine(idLine: number): void {
    this.router.navigate(['corrections', 'edit', idLine]);
  }

  onEditRecord(record: any): void {
    this.showListRecords = false;
    this.showFormRecord = true;
    this.record = record;
  }

  onCancel(): void {
    this.showBtnEdit = false;
    this.resetForm();
  }

  resetForm(): void {
    this.form.reset();
  }

  get getName() {
    return this.form.get('name');
  }

  get getWeek() {
    return this.formSearch.get('week');
  }

  get getDay() {
    return this.formSearch.get('day');
  }

}
