import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';
import { Line } from 'src/app/shared/models/line';
import { AppState } from 'src/app/shared/store/reducers';
import { Store } from '@ngrx/store';
import { getLines } from 'src/app/shared/store/selectors/line.selectors';

@Component({
  selector: 'app-corrections',
  templateUrl: './corrections.component.html',
  styleUrls: ['./corrections.component.scss']
})
export class CorrectionsComponent implements OnInit {

  lines: Line[];

  constructor(private authService: AuthService, private router: Router, private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(getLines).subscribe(lines => this.lines = lines);
  }

  onClickLogout(){
    this.authService.logout();
    this.router.navigate(['/home']);
  }

}
