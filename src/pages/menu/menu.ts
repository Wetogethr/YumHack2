import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ChickfilaPage } from '../chickfila/chickfila';
import { ChipotlePage } from '../chipotle/chipotle';
import { ShakeshackPage } from '../shakeshack/shakeshack';
import { StarbucksPage } from '../starbucks/starbucks';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
    items = [
        'Chick-fil-A',
        'Chipotle',
        'Shake Shack',
        'Starbucks'
    ];

    itemSelected(item: string) {
        console.log("Selected Item", item);
    }
  constructor(public navCtrl: NavController) {}
  chickfilaPage() {
      this.navCtrl.push(ChickfilaPage);
  }
  chipotlePage() {
      this.navCtrl.push(ChipotlePage);
  }
  shakeshackPage() {
      this.navCtrl.push(ShakeshackPage);
  }
  starbucksPage() {
      this.navCtrl.push(StarbucksPage);
  }
}
