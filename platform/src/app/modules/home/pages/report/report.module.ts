import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ReportComponent } from './report.component';
import { SearchFormModule } from '../../components/search-form/search-form.module';

import { ReportsService } from 'src/app/shared/services/reports.service';
import { CommonModule } from '@angular/common';
import { SpecialTableModule } from 'src/app/shared/components/special-table/special-table.module';
import { TableModule } from 'src/app/shared/components/table/table.module';
import { TableLineModule } from 'src/app/shared/components/table-line/table-line.module';

const routes: Routes = [
    { path: '', component: ReportComponent }
]

const COMMON_DECLARATIONS = [ 
    ReportComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    SearchFormModule,
    SpecialTableModule,
    TableModule,
    TableLineModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    exports: COMMON_DECLARATIONS,
    providers: [ReportsService]
})

export class ReportModule { }