import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { ReportComponent } from './report.component';

import { ReportsService } from 'src/app/shared/services/reports.service';
import { CommonModule } from '@angular/common';
import { SpecialTableModule } from 'src/app/shared/components/special-table/special-table.module';
import { TableModule } from 'src/app/shared/components/table/table.module';

import { ReactiveFormsModule } from "@angular/forms";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
    { path: '', component: ReportComponent }
]

const COMMON_DECLARATIONS = [ 
    ReportComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    SpecialTableModule,
    TableModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    exports: COMMON_DECLARATIONS,
    providers: [ReportsService]
})

export class ReportModule { }