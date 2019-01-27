import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.scss']
})
export class SkuFormComponent implements OnInit {

  @Input()formParent: FormGroup;

  formResults: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formResults = fb.group({
      oee: [''],
      ge: [''],
      tld: [''],
      kgMin: [''],
      kgCj: [''],
      wasteTime: [''],
    })
  }

  ngOnInit() {  }
  
  get getSku(){
    return this.formParent.get('sku') as FormArray;
  }

  get getOcurrences(){
    return this.getSku.controls[0].get('ocurrences') as FormArray;
  }

  addSkuForm(): FormGroup{
    return this.fb.group({
      productionTime: ['', Validators.required],
      volume: ['', Validators.required],
      description: ['', Validators.required],
      waste: ['', Validators.required],
      retentions: ['', Validators.required],
      reprocess: ['', Validators.required],
      ocurrences: this.fb.array([
        
      ])
    })
  }


  addSkuClick():void{
    this.getSku.push(this.addSkuForm());
    console.log(this.formParent);
  }

  createOcurrenceForm(): FormGroup{
    return this.fb.group({
      key: ['', Validators.required],
      minutes: ['', Validators.required],
      numberOcurrence: ['', Validators.required]
    })
  }

  addOcurrenceClick(i){
    (this.getSku.controls[i].get('ocurrences') as FormArray).push(this.createOcurrenceForm());
  }

  onSave(): void {
    if(this.formParent.valid)
      console.log(this.formParent.value);
      else
      console.log('Aun faltan datos')
  }

  onCalculate(){
    this.formResults.get('wasteTime').setValue(200);
  }

}
