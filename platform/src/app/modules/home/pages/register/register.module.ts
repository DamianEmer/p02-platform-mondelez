import { NgModule } from '@angular/core';
import { RegisterComponent } from './register.component';
import { LineFormModule } from '../../components/line-form/line-form.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    { path: '', component: RegisterComponent }
]

const COMMON_DECLARATIONS = [
    RegisterComponent
]

const COMMON_IMPORTS = [ 
    LineFormModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    exports: COMMON_DECLARATIONS
})

export class RegisterModule { }