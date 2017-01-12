import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConnectDialogComponent } from './root-components';

@Component({
  selector: 'sdg-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/styles/material.scss',
    '../assets/styles/index.scss'
  ]
})
export class AppComponent {
  constructor(private dialog: MdDialog) {

  }

  private connect(): void {
    this.dialog.open(ConnectDialogComponent);
  }
}
