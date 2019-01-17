import { NgModule } from '@angular/core';
import { SkuFormComponent } from './sku-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const COMMON_DECLARATIONS = [
    SkuFormComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class SkuFormModule { }
