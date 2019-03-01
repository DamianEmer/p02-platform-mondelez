import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';
import { MatSnackBar } from '@angular/material';
import { SaveConfirmModalComponent } from 'src/app/shared/components/save-confirm-modal/save-confirm-modal.component';

@Component({
  selector: 'app-line-form-edit',
  templateUrl: './line-form-edit.component.html',
  styleUrls: ['./line-form-edit.component.scss']
})
export class LineFormEditComponent implements OnInit {

  formEdit: FormGroup;

  idParam: string;

  line: any;

  constructor(private fb: FormBuilder,
    private router: ActivatedRoute,
    private _router: Router,
    private confirm: MatSnackBar,
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
    // const line: any = {};
    this.dataService.getLineById(id).subscribe(line => this.line = line);
    this.formEdit.patchValue({
      line: this.line.line,
      category: this.line.category,
      technology: this.line.technology,
      number: this.line.number
    });
    this.formEdit.setControl('products', this.existProducts(this.line.products));
    this.formEdit.setControl('breakdowns', this.existBreakdowns(this.line.breakdowns));
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

  onSave(): void {
    this.dataService.updateLine(this.line.id, this.formEdit.value).subscribe(response => {
      this.confirm.openFromComponent(SaveConfirmModalComponent, {
        duration: 1500
      })
    });
  }

  onCancel(): void {
    this._router.navigate(['./corrections']);
  }

  get getProducts() {
    return this.formEdit.get('products') as FormArray;
  }

  get getBreakdowns() {
    return this.formEdit.get('breakdowns') as FormArray;
  }

}
