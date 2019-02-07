import { NgModule } from "@angular/core";
import { TableCheckReportComponent } from "./table-check-report.component";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { SearchFormComponent } from "./search-form/search-form.component";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';



const COMMON_DECLARATIONS = [
    TableCheckReportComponent,
    SearchFormComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class TableCheckReportModule { }