import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { MaterialModule } from '@angular/material';

import { HomeComponent } from './root-components';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    MaterialModule.forRoot(),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
