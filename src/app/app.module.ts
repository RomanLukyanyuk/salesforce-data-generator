import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';

import { HomeComponent, ConnectDialogComponent } from './root-components';
import { SharedModule } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    SharedModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ConnectDialogComponent
  ],
  entryComponents: [
    ConnectDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
