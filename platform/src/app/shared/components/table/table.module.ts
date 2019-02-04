import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RowInfoComponent } from './row-info/row-info.component';
import { RowHeaderComponent } from './row-header/row-header.component';
import { RowResultsComponent } from './row-results/row-results.component';

import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { ModalChartModule } from '../modal-chart/modal-chart.module';


const COMMON_DECLARATIONS = [
    TableComponent,
    RowInfoComponent,
    RowHeaderComponent,
    RowResultsComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    ModalChartModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class TableModule{

}