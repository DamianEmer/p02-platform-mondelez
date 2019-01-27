import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.scss']
})
export class SkuFormComponent implements OnInit {

  @Input()formParent: FormGroup;

  //formResults: FormGroup;

  constructor(private fb: FormBuilder) {
    // this.formResults = fb.group({
    //   oee: [''],
    //   ge: [''],
    //   tld: [''],
    //   kgMin: [''],
    //   kgCj: [''],
    //   wasteTime: [''],
    // })
  }

  ngOnInit() { 
  }

  get getSku(){
    return this.formParent.get('sku') as FormArray;
  }

  get getUnplanedStoppages(){
    return this.getSku.get('stoppages') as FormArray;
  }

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: [''],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  paro(i: number){
    console.log("SKU-> ",this.getSku.controls[i]);
    (<FormArray>this.getSku.controls[i].get('stoppages')).push(this.stoppagesForm());
    
  }

}
