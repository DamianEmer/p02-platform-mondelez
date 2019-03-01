import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectionsComponent } from './corrections.component';
import { EditComponent } from './edit/edit.component';
import { CommonModule } from '@angular/common';
import { SkuFormModule } from '../../components/sku-form/sku-form.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { LineFormEditModule } from '../../components/line-form-edit/line-form-edit.module';
import { LineFormModule } from '../../components/line-form/line-form.module';

const routes: Routes = [
    { path: '', component: CorrectionsComponent },
    { path: 'edit/:id', component: EditComponent }
]

const COMMON_DECLARATIONS = [
    CorrectionsComponent,
    EditComponent
]

const COMMON_IMPORTS = [
    CommonModule,
    SkuFormModule,
    RouterModule.forChild(routes),
    LineFormEditModule,
    MatTabsModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    LineFormModule,
    ReactiveFormsModule,
    MatTableModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class CorrectionsModule {

}