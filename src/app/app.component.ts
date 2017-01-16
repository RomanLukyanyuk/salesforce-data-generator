import { Component, ViewEncapsulation, ViewContainerRef } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { ConnectDialogComponent } from './root-components';
const jsforce = require('jsforce');

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
    // this.dialog.open(ConnectDialogComponent);

    /* JSFORCE INIT */
    const clientId = '3MVG9YDQS5WtC11rvanUWkKxkehvO.yx_kS.5Qyal.qrPBAPrLHekam7QKdVIRlNWKHLDct.4i4R_nmKRUqw.';
    const redirectURI = 'https://salesforce-data-generator.herokuapp.com/oauth.html';
    const proxyURL = 'https://salesforce-data-generator.herokuapp.com/proxy/';
    
    jsforce.browser.init({
        clientId: clientId,
        redirectUri: redirectURI,
        proxyUrl: proxyURL
    });

    jsforce.browser.login({ 
        loginUrl: 'https://login.salesforce.com',
        popup: { width: 912, height: 600 }
    }, (err: any) => {
        if (err) {
            return console.error(err);
        }

        jsforce.browser.connection.identity().then((res: any) => {
          console.log(res);
        });
    });
  }
}
