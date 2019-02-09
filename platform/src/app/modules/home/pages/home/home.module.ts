import { NgModule } from "@angular/core"; 
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./home.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

const COMMON_DECLARATIONS = [
    HomeComponent
];

const COMMON_IMPORTS = [
    CommonModule,
    RouterModule.forChild(routes)
];

@NgModule({
    declarations: COMMON_DECLARATIONS,
    imports: COMMON_IMPORTS,
    exports: COMMON_DECLARATIONS
})

export class HomeModule { }