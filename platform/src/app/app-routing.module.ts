import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './modules/home/pages/home/home.module#HomeModule'
    },
    {
        path: 'register',
        loadChildren: './modules/home/pages/register/register.module#RegisterModule'
    },
    {
        path: 'report',
        loadChildren: './modules/home/pages/report/report.module#ReportModule'
    },
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule { }