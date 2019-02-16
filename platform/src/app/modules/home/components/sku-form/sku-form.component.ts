import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { OperationsService } from 'src/app/shared/services/operations.service';
//Models
import { UnplannedStoppage } from 'src/app/shared/models/unplannedStoppage';
import { Product, BreakDown } from 'src/app/shared/models/Line2';

@Component({
  selector: 'app-sku-form',
  templateUrl: './sku-form.component.html',
  styleUrls: ['./sku-form.component.scss']
})
export class SkuFormComponent implements OnInit {

  @Input() formParent: FormGroup;

  @Input() products: Product[];

  @Input() turnTime: number;

  @Input() unplannedStoppages: BreakDown[];

  product: Product;

  constructor( private fb: FormBuilder, 
    private operationsServices: OperationsService ) { }

  ngOnInit() {
  
  }

  stoppagesForm(): FormGroup {
    return this.fb.group({
      id: [''],
      minutes: ['', Validators.required],
      times: ['', Validators.required]
    })
  }

  //Calculos automaticos cuando seleccione el producto(sku)

  selectDropDown(select: string, i: number) {
    let prodTime;//Tiempo de produccion
    let volume; //volumen
    let tld; // Tiempo libre de defecto
    let sumUnplanned: number = 0; //sumatoria de minutos para paros no planeados
    let sumPlanned: number = 0; // sumatoria de minutos para paros planeados
    let speed; // velocidad de produccion
    this.product = this.products.find(product => parseInt(select) === product.id);

    speed = this.operationsServices.convertionSpeed(this.product.kgmin);//Se saca el valor de velocidad del productor seleccionado
    this.getSku.controls[i].get('kgMin').setValue(speed.toFixed(2));// Mostrando informacion de velocidad
    this.getSku.controls[i].get('kgCj').setValue(this.product.kgcj); // Mostrando informacion de kg/caja

    /**Recalcula (TLD, OEE, Perdida de velocidad y GE) Cuando se detectan cambios en los campos 
      tiempos de produccion y volumen
    **/
    this.getSku.controls[i].get('productionTime').valueChanges.subscribe(val => {
      prodTime = val;
      this.getSku.controls[i].get('volume').valueChanges.subscribe(val => {
        volume = val;
        tld = this.operationsServices.calculateTLD(this.product.kgcj, volume, speed);
        this.getSku.controls[i].get('tld').setValue(tld.toFixed(2));
        this.getSku.controls[i].get('idealvolume').setValue(this.operationsServices.calcIdealProduction(speed,prodTime,this.product.kgcj).toFixed(2));
        this.getSku.controls[i].get('oee').setValue(this.operationsServices.calcOEE_Sku(tld, prodTime).toFixed(2));
        this.getSku.controls[i].get('lossSpeed').setValue(this.operationsServices.calcLossSpeed(prodTime, tld, sumUnplanned).toFixed(2));
        this.getSku.controls[i].get('ge').setValue(this.operationsServices.calcGE_Sku(tld, this.turnTime, sumPlanned).toFixed(2));
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

    /** En caso de agregar un paro planeado recalcula la perdida de velocidad*/
    this.formParent.get('stoppages').valueChanges.subscribe((data: any[]) => {
      sumPlanned = 0;
      data.map(val => {
        sumPlanned += (val.minutes * val.times);
      });
      this.getSku.controls[i].get('ge').setValue(this.operationsServices.calcGE_Sku(tld, this.turnTime, sumPlanned).toFixed(2));
    });
  }

  //Agrega nuevo pare no planeado al SKU
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
