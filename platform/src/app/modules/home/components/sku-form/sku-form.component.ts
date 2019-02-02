import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { OperationsService } from 'src/app/shared/services/operations.service';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.scss']
})
export class SkuFormComponent implements OnInit {

  @Input() formParent: FormGroup;

  @Input() products: any;

  @Input() turnTime: any;

  product: any;

  constructor(private fb: FormBuilder, private operationsServices: OperationsService) { }

  ngOnInit() {

  }

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: [''],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  selectDropDown(select: string, i: number) {
    let prodTime;
    let volume;
    let tld;
    let sumUnplanned: number = 0;
    let sumPlanned: number = 0;
    let speed;
    this.product = this.products.filter(product => select === product.id);

    speed = this.operationsServices.convertionSpeed(this.product[0].kgMin);
    this.getSku.controls[i].get('kgMin').setValue(speed.toFixed(2));
    this.getSku.controls[i].get('kgCj').setValue(this.product[0].kgCj);

    this.getSku.controls[i].get('productionTime').valueChanges.subscribe(val => {
      prodTime = val;
      this.getSku.controls[i].get('volume').valueChanges.subscribe(val => {
        volume = val;
        tld = this.operationsServices.calculateTLD(this.product[0].kgCj, volume, speed);
        this.getSku.controls[i].get('tld').setValue(tld.toFixed(2));
        this.getSku.controls[i].get('oee').setValue(this.operationsServices.calcOEE_Sku(tld, prodTime).toFixed(2));
        this.getSku.controls[i].get('lossSpeed').setValue(this.operationsServices.calcLossSpeed(prodTime, tld, sumUnplanned).toFixed(2));
        this.getSku.controls[i].get('ge').setValue(this.operationsServices.calcGE_Sku(tld, this.turnTime[0].time, sumPlanned).toFixed(2));
      });
    });

    /** En caso de agregar un paro no planeado recalcula la perdida de velocidad*/
    this.getSku.controls[i].get('stoppages').valueChanges.subscribe((data: any[]) => {
      sumUnplanned = 0;
      data.map(val => {
        sumUnplanned += (val.minutes * val.times);
      });
      this.getSku.controls[i].get('lossSpeed').setValue(this.operationsServices.calcLossSpeed(prodTime, tld, sumUnplanned).toFixed(2));
    });

    this.formParent.get('stoppages').valueChanges.subscribe((data: any[]) => {
      sumPlanned = 0;
      data.map(val => {
        sumPlanned += (val.minutes * val.times);
      });
      this.getSku.controls[i].get('ge').setValue(this.operationsServices.calcGE_Sku(tld, this.turnTime[0].time, sumPlanned).toFixed(2));
    });
  }

  addParo(i: number) {
    (<FormArray>this.getSku.controls[i].get('stoppages')).push(this.stoppagesForm());
  }

  get getSku() {
    return this.formParent.get('sku') as FormArray;
  }

  get getUnplanedStoppages() {
    return this.getSku.get('stoppages') as FormArray;
  }

}
