import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: './modules/home/pages/home/home.module#HomeModule'
    },
    {
        path: 'login',
        loadChildren: './modules/home/pages/login/login.module#LoginModule'
    },
    {
        path: 'corrections',
        canActivate: [AuthGuard],
        loadChildren: './modules/home/pages/corrections/corrections.module#CorrectionsModule'
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
        path: 'check-report',
        loadChildren: './modules/home/pages/check-report/check-report.module#CheckReportModule'
    },
    {
        path: 'report/:id',
        loadChildren: './modules/home/pages/line-detail/line-detail.module#LineDetailModule'
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