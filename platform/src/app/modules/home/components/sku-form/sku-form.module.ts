import { NgModule } from '@angular/core';
import { SkuFormComponent } from './sku-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const COMMON_DECLARATIONS = [
    SkuFormComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
]

const COMMON_IMPORTS_MATERIAL = [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, COMMON_IMPORTS_MATERIAL],
    exports: COMMON_DECLARATIONS
})

export class SkuFormModule { }
