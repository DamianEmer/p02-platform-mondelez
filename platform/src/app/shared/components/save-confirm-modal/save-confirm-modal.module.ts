import { NgModule } from '@angular/core';
import { SaveConfirmModalComponent } from './save-confirm-modal.component';
import { CommonModule } from '@angular/common';

const COMMON_DECLARATIONS = [
    SaveConfirmModalComponent
];

const COMMON_IMPORTS = [
    CommonModule
]

@NgModule({
    declarations: COMMON_DECLARATIONS,
    entryComponents: [
        SaveConfirmModalComponent
    ],
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class SaveConfirmModalModule {

}