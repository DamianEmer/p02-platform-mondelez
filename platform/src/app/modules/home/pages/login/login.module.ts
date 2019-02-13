import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';


const routes: Routes = [
    { path: '', component:LoginComponent }
]

const COMMON_DECLARATIONS = [
    LoginComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class LoginModule { }