import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-line-form-edit',
  templateUrl: './line-form-edit.component.html',
  styleUrls: ['./line-form-edit.component.scss']
})
export class LineFormEditComponent implements OnInit {

  formEdit: FormGroup;

  idParam: string;

  constructor(private fb: FormBuilder, 
    private router: ActivatedRoute,
    private _router: Router,
    private dataService: DataService) { }

  ngOnInit() {

    this.idParam = this.router.snapshot.params.id;
    console.log(this.idParam);

    this.formEdit = this.fb.group({
      line: ['', Validators.required],
      category: ['', Validators.required],
      technology: ['', Validators.required],
      number: ['', Validators.required],
      products: this.fb.array([]),
      breakdowns: this.fb.array([])
    })
    this.onEdit(parseInt(this.idParam));
  }

  onEdit(id?: number): void {
    let line = this.dataService.getLineById(id);
    this.formEdit.patchValue({
      line: line.line,
      category: line.category,
      technology: line.technology,
      number: line.number
    });
    this.formEdit.setControl('products', this.existProducts(line.products));
    this.formEdit.setControl('breakdowns', this.existBreakdowns(line.breakdowns));
  }

  existProducts(products: any[]): FormArray {
    const formArray = new FormArray([]);
    products.forEach(p => {
      formArray.push(this.fb.group({
        product: p.description,
        kgmin: p.kgmin,
        kgcj: p.kgcj
      }));
    });
    return formArray;
  }

  existBreakdowns(breakdowns: any[]): FormArray {
    const formArray = new FormArray([]);
    breakdowns.forEach(bd => {
      formArray.push(this.fb.group({
        breakdown: bd.description
      }));
    });
    return formArray;
  }

  onSave():void {
    console.log("Datos actualizados: ", this.formEdit.value);
  }

  onCancel():void {
    this._router.navigate(['./corrections']);
  }

  get getProducts() {
    return this.formEdit.get('products') as FormArray;
  }

  get getBreakdowns() {
    return this.formEdit.get('breakdowns') as FormArray;
  }

}
