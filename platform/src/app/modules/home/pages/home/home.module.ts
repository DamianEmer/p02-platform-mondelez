import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { LineFormModule } from '../../components/line-form/line-form.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: HomeComponent }
]

const COMMON_DECLARATIONS = [
    HomeComponent
]

const COMMON_IMPORTS = [ 
    LineFormModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    exports: COMMON_DECLARATIONS
})

export class HomeModule { }