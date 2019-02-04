import { NgModule } from '@angular/core';
import { ModalChartComponent } from './modal-chart.component';
import { CommonModule } from '@angular/common';

import { ChartModule } from 'angular-highcharts';

const COMMON_DECLARATIONS = [
    ModalChartComponent
]

const COMMON_IMPORTS = [
    CommonModule,
    ChartModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    entryComponents: [
        ModalChartComponent
    ],
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class ModalChartModule{ }