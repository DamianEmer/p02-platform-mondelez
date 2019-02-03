import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RowInfoComponent } from './row-info/row-info.component';
import { RowHeaderComponent } from './row-header/row-header.component';

import {MatTableModule} from '@angular/material/table';

const COMMON_DECLARATIONS = [
    TableComponent,
    RowInfoComponent,
    RowHeaderComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    MatTableModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class TableModule{

}