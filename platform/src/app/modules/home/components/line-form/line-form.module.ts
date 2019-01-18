import { NgModule } from '@angular/core';
import { LineFormComponent } from './line-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkuFormModule } from '../sku-form/sku-form.module';

import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';



const COMMON_DECLARATIONS = [
    LineFormComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    CommonModule,
    SkuFormModule
]

const COMMON_IMPORT_MATERIAL = [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, COMMON_IMPORT_MATERIAL],
    exports: COMMON_DECLARATIONS
})

export class LineFormModule { }
