import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/services/data.service';
import { map } from 'rxjs/Operators';

@Component({
  selector: 'app-line-form',
  templateUrl: './line-form.component.html',
  styleUrls: ['./line-form.component.scss']
})
export class LineFormComponent implements OnInit {

  form: FormGroup;

  lines: number[];

  operators: any[];

  constructor( private fb: FormBuilder, private ds: DataService) {

    this.form = fb.group({
      line: ['', Validators.required],
      operator: ['', Validators.required],
      turn: ['', Validators.required]
    })

  }

  ngOnInit() {

    this.ds.getLines().subscribe(
      lines => {
        this.lines = lines;
      }
    );
    
   
  }

  generateForm(): void{
    
  }

  onSave():void {
    console.log(this.form.value);
  } 

  selectDropDown(select: string){
    this.ds.getOperators().subscribe(
      operators => this.operators = operators.filter(
        (operator, i) => { 
          return parseInt(select) === operator.idLine;
        }
      )
    );
  }

}
