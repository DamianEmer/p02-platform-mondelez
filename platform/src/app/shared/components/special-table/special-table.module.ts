import { NgModule } from '@angular/core';
import { SpecialTableComponent } from './special-table.component';
import { CommonModule } from '@angular/common';

const COMMON_DECLARATIONS = [
    SpecialTableComponent
];

const COMMON_IMPORTS = [
    CommonModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class SpecialTableModule{

}