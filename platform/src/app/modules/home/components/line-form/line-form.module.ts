import { NgModule } from '@angular/core';
import { LineFormComponent } from './line-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SkuFormModule } from '../sku-form/sku-form.module';

import { MatButtonModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from "@angular/material";
import { StoppagesFormModule } from '../stoppages-form/stoppages-form.module';
import { SaveConfirmModalModule } from 'src/app/shared/components/save-confirm-modal/save-confirm-modal.module';

const COMMON_DECLARATIONS = [
    LineFormComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    CommonModule,
    SkuFormModule,
    StoppagesFormModule
]

const COMMON_IMPORT_MATERIAL = [
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSnackBarModule,
    SaveConfirmModalModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, COMMON_IMPORT_MATERIAL],
    exports: COMMON_DECLARATIONS
})

export class LineFormModule { }
