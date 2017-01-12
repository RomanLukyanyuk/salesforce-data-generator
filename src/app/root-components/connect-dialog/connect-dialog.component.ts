import { Component } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
  selector: 'sdg-dialog',
  templateUrl: './connect-dialog.component.html',
  styleUrls: ['./connect-dialog.component.scss']
})
export class ConnectDialogComponent {
  private logins: any[] = [
    { label: 'Production (login.salesforce.com)', url: 'https://login.salesforce.com' },
    { label: 'Sandbox (test.salesforce.com)', url: 'https://test.salesforce.com' }
  ];

  constructor(private dialogRef: MdDialogRef<ConnectDialogComponent>) {

  }

  private close() {
    this.dialogRef.close();
  }
}
