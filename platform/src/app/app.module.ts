import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/pages/home/home.module';
import { StoppagesFormComponent } from './modules/home/components/stoppages-form/stoppages-form.component';

@NgModule({
  declarations: [
    AppComponent,
    StoppagesFormComponent,
  ],
  imports: [
    BrowserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
