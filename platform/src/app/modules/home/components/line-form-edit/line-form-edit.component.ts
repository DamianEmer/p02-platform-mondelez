import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-line-form-edit',
  templateUrl: './line-form-edit.component.html',
  styleUrls: ['./line-form-edit.component.scss']
})
export class LineFormEditComponent implements OnInit {

  formEdit: FormGroup;

  idParam: string;

  lines = [
    {
      id: 1,
      line: 'Linea 1',
      catogory: 'cat1',
      technology: 'tech1',
      numLine: '01 Linea 1',
      products: [
        {
          id: 1,
          product: 'pro 1',
          kgmin: 1200,
          kgcj: 5000
        },
        {
          id: 2,
          product: 'pro 2',
          kgmin: 1880,
          kgcj: 6220
        },
        {
          id: 3,
          product: 'pro 3',
          kgmin: 1200,
          kgcj: 2000
        }
      ],
      breakdowns: [
        {
          id: 1,
          breakdown: 'Sin energia eletrica'
        },
        {
          id: 2,
          breakdown: 'Sin agua'
        }
      ]
    },
    {
      id: 2,
      line: 'Linea 2',
      catogory: 'cat2',
      technology: 'tech2',
      numLine: '02 Linea 2',
      products: [
        {
          id: 1,
          product: 'pro 1',
          kgmin: 1200,
          kgcj: 5000
        },
        {
          id: 2,
          product: 'pro 2',
          kgmin: 1880,
          kgcj: 6220
        },
        {
          id: 3,
          product: 'pro 3',
          kgmin: 1200,
          kgcj: 2000
        }
      ],
      breakdowns: [
        {
          id: 1,
          breakdown: 'Sin energia eletrica'
        },
        {
          id: 2,
          breakdown: 'Sin agua'
        }
      ]
    }
  ]



  constructor(private fb: FormBuilder, private router: ActivatedRoute) { }

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
    let line = this.lines.find(line => line.id === id);
    this.formEdit.patchValue({
      line: line.line,
      category: line.catogory,
      technology: line.technology,
      number: line.numLine
    });
    this.formEdit.setControl('products', this.existProducts(line.products));
    this.formEdit.setControl('breakdowns', this.existBreakdowns(line.breakdowns));
  }

  existProducts(products: any[]): FormArray {
    const formArray = new FormArray([]);
    products.forEach(p => {
      formArray.push(this.fb.group({
        product: p.product,
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
        breakdown: bd.breakdown
      }));
    });
    return formArray;
  }

  get getProducts() {
    return this.formEdit.get('products') as FormArray;
  }

  get getBreakdowns() {
    return this.formEdit.get('breakdowns') as FormArray;
  }

}
