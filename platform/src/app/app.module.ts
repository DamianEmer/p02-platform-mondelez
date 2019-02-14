import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperationsService } from './shared/services/operations.service';

import { AppRoutingModule } from "./app-routing.module";

import { ChartModule } from 'angular-highcharts';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducers } from './shared/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './shared/store/effects';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SimpleAuthInterceptor } from './shared/helpers/simple-auth.interceptor';
import { ErrorInterceptor } from './shared/helpers/error.interceptor';
import { AuthGuard } from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [
    OperationsService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: SimpleAuthInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
