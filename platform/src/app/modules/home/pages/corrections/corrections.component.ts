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

@Component({
  selector: 'app-corrections',
  templateUrl: './corrections.component.html',
  styleUrls: ['./corrections.component.scss']
})
export class CorrectionsComponent implements OnInit {

  form: FormGroup;

  lines: Line2[];

  operators: Operator[];

  showBtnEdit: boolean

  
  constructor(
    private authService: AuthService,
    private fb: FormBuilder, 
    private router: Router, 
    private store: Store<AppState>) { 
      this.showBtnEdit = false;
  }

  ngOnInit() {
    this.store.select(getLines).subscribe(lines => this.lines = lines);
    this.store.dispatch(new AllActionsOperator.LoadOperators());
    this.store.select(getOperators).subscribe(operators => this.operators = operators);

    this.form = this.fb.group({
      name: ['', Validators.required],
      line: ['', Validators.required]
    })
  }

  onSave(): void {
    console.log("Nuevo operador: ", this.form.value);
  }

  onUpdate(){
    console.log("Actualizar operador: ", this.form.value)
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  onEditOperator(id: number) {
    this.showBtnEdit = true;
    let operator = this.operators.find(ope => ope.id === id);
    let line = this.lines.find(l => l.id === operator.idLine);
    console.log("Linea: ", line);
    this.form.patchValue({
      name: operator.name,
      line: line.line
    })
  }

  onEdit(idLine: number){
    this.router.navigate(['corrections', 'edit', idLine]);
  }

  get getName(){
    return this.form.get('name');
  }

}
