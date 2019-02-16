import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectionsComponent } from './corrections.component';
import { EditComponent } from './edit/edit.component';
import { CommonModule } from '@angular/common';
import { SkuFormModule } from '../../components/sku-form/sku-form.module';
import { UserFormModule } from '../../components/user-form/user-form.module';

import {MatTabsModule} from '@angular/material/tabs'; 
import {MatListModule} from '@angular/material/list'; 
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
    UserFormModule,
    LineFormEditModule,
    MatTabsModule,
    MatListModule,
    LineFormModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class CorrectionsModule {
    
}