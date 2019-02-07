import { NgModule } from "@angular/core"; 
import { SearchFormComponent } from "./search-form.component";

import { ReactiveFormsModule } from "@angular/forms";

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const COMMON_DECLARATIONS = [
    SearchFormComponent
];

const COMMON_IMPORTS = [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class SearchFormModule { }