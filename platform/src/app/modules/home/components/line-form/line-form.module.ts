import { NgModule } from '@angular/core';
import { LineFormComponent } from './line-form.component';

const COMMON_DECLARATIONS = [
    LineFormComponent
]

const COMMON_IMPORTS = [ ]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class LineFormModule { }
