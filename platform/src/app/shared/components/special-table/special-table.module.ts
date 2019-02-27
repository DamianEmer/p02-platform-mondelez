import { NgModule } from '@angular/core';
import { SpecialTableComponent } from './special-table.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

const COMMON_DECLARATIONS = [
    SpecialTableComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    MatButtonModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class SpecialTableModule{

}