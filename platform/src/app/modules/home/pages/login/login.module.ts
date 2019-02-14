import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material';
import { AuthService } from 'src/app/shared/services/auth.service';


const routes: Routes = [
    { path: '', component:LoginComponent }
]

const COMMON_DECLARATIONS = [
    LoginComponent
]

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(routes)
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS,
    providers: [AuthService]
})

export class LoginModule { }