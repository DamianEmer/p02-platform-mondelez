import { NgModule } from '@angular/core';
import { LineFormComponent } from './line-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const COMMON_DECLARATIONS = [
    LineFormComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    CommonModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class LineFormModule { }
