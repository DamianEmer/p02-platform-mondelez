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
        this.createOcurrenceForm()
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

  addOcurrenceClick(){
    this.getOcurrences.push(this.createOcurrenceForm());
  }

}
