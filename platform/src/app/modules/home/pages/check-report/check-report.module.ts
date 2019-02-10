import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckReportComponent } from './check-report.component';
import { TableCheckReportModule } from '../../components/table-check-report/table-check-report.module';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: CheckReportComponent }
]

const COMMON_DECLARATIONS = [
    CheckReportComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    TableCheckReportModule,
    RouterModule.forChild(routes)
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class CheckReportModule {

}