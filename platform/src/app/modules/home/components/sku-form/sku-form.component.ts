import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.scss']
})
export class SkuFormComponent implements OnInit {

  @Input()formParent: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {  }
  
  get getSku(){
    return this.formParent.get('sku') as FormArray;
  }

  addSkuForm(): FormGroup{
    return this.fb.group({
      productionTime: ['', Validators.required],
      volume: ['', Validators.required],
      description: ['', Validators.required],
    })
  }


  addSkuClick():void{
    this.getSku.push(this.addSkuForm());
  }

}
