import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OperationsService } from './shared/services/operations.service';

import { AppRoutingModule } from "./app-routing.module";

import { ChartModule } from 'angular-highcharts';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ChartModule,
    AppRoutingModule
  ],
  providers: [OperationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
