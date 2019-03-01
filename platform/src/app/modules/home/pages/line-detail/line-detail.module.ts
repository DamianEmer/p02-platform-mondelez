import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineDetailComponent } from './line-detail.component';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table'; 

const routes: Routes = [
    { path: '', component: LineDetailComponent}
]

const COMMMON_DECLARATIONS = [
    LineDetailComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
];

@NgModule({
    declarations: COMMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMMON_DECLARATIONS
})

export class LineDetailModule { }