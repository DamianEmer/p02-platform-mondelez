import { NgModule } from '@angular/core';
import { ErrorMessageModalComponent } from './error-message-modal.component';
import { CommonModule } from '@angular/common';

const COMMON_DECLARATIONS = [
    ErrorMessageModalComponent
];

const COMMON_IMPORTS = [
    CommonModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class ErrorMessageModalModule {
    
}