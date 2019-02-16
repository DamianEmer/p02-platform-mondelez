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

@Component({
  selector: 'app-corrections',
  templateUrl: './corrections.component.html',
  styleUrls: ['./corrections.component.scss']
})
export class CorrectionsComponent implements OnInit {

  lines: Line2[];

  operators: Operator[];

  operator: Operator;
  
  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getLines).subscribe(lines => this.lines = lines);
    this.store.dispatch(new AllActionsOperator.LoadOperators());
    this.store.select(getOperators).subscribe(operators => this.operators = operators);
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  onEdit(idLine: number){
    this.router.navigate(['corrections', 'edit', idLine]);
  }

}
