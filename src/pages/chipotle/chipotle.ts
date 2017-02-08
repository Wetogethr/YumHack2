import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chipotle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chipotle',
  templateUrl: 'chipotle.html'
})
export class ChipotlePage {
    chipotles: Array<{ name: string, image: string, order: string, icon: string, showOrder: boolean }> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 1; i++) {
            this.chipotles.push({
                name: 'Burritodilla',
                image: 'assets/icon/chipotle/burritodilla.png',
                order: 'Ask for a burrito - with half the amount of fillings so that it won\'t overflow - to be grilled up like a quesadilla.',
                icon: 'add',
                showOrder: false
            }, {
                    name: 'Nachos',
                    image: 'assets/icon/chipotle/nachos.png',
                    order: 'Ask for a Burrito Bowl with chips instead of rice.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Quesadilla',
                    image: 'assets/icon/chipotle/quesadilla.png',
                    order: 'Ask for a quesadilla.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Quesarito',
                    image: 'assets/icon/chipotle/quesarito.png',
                    order: 'Ask for a Cheese Quesadilla to be used as the shell for your burrito.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Single Taco',
                    image: 'assets/icon/chipotle/taco.png',
                    order: 'Ask for a single taco.',
                    icon: 'add',
                    showOrder: false
                });
        }
    }

    toggleOrder(chipotles) {
        if (chipotles.showOrder) {
            chipotles.showOrder = false;
            chipotles.icon = 'add';
        } else {
            chipotles.showOrder = true;
            chipotles.icon = 'remove';
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChipotlePage');
  }

}
