import { Component } from '@angular/core';
import { BarcodeScanner } from 'custom-plugins/src';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }

  async capture() {
    BarcodeScanner.hideBackground(); // make background of WebView transparent
    const result = await BarcodeScanner.startScan(); // start scanning and wait for a result
    // if the result has content
    if (result.hasContent) {
      console.log(result.content); // log the raw scanned content
    }
  }

}
