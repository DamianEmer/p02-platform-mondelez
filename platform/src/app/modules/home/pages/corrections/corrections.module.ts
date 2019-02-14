import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectionsComponent } from './corrections.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: CorrectionsComponent }
]

const COMMON_DECLARATIONS = [ 
    CorrectionsComponent
]

const COMMON_IMPORTS = [
    CommonModule,
    RouterModule.forChild(routes)
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class CorrectionsModule {
    
}