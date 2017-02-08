import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Shakeshack page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shakeshack',
  templateUrl: 'shakeshack.html'
})
export class ShakeshackPage {
    shakeshacks: Array<{ name: string, image: string, order: string, icon: string, showOrder: boolean }> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 1; i++) {
            this.shakeshacks.push({
                name: 'Peanut Butter & Bacon ShackBurger',
                image: 'assets/icon/shakeshack/pbnb.png',
                order: 'Ask for peanut sauce on the side of your Bacon Shackburger - then pour over your burger.',
                icon: 'add',
                showOrder: false
            }, {
                    name: 'The Smoke Shack Quad Burger',
                    image: 'assets/icon/shakeshack/quad.png',
                    order: 'Ask for it by name.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Shack-Cago Burger',
                    image: 'assets/icon/shakeshack/cago.png',
                    order: 'Order the Chicago style hotdog and transfer the toppings to your burger.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Grilled Cheese Sandwich',
                    image: 'assets/icon/shakeshack/grilledcheese.png',
                    order: 'Order by name and have the option of bacon on the side.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'The Shandy',
                    image: 'assets/icon/shakeshack/Shandy.png',
                    order: 'Order by name - if your location is unfamiliar with it, ask for some beer in your lemonade.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Chili Pepper Cheese Fries',
                    image: 'assets/icon/shakeshack/fries.png',
                    order: 'Ask for chili peppers on your cheese fries.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Protein Style Burger',
                    image: 'assets/icon/shakeshack/proteinstyle.png',
                    order: 'Ask for it "protein style" - or without the bun - and they\'ll wrap it in lettuce.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Ice Cream Sandwich',
                    image: 'assets/icon/shakeshack/ics.png',
                    order: 'Ask for toasted buns on the side of your ice cream - then smash the ice cream between those buns.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Beer Float',
                    image: 'assets/icon/shakeshack/rbf.png',
                    order: 'Order a beer and ask for a scoop of your favorite custard to be added in.',
                    icon: 'add',
                    showOrder: false
                });
        }
    }

    toggleOrder(shakeshacks) {
        if (shakeshacks.showOrder) {
            shakeshacks.showOrder = false;
            shakeshacks.icon = 'add';
        } else {
            shakeshacks.showOrder = true;
            shakeshacks.icon = 'remove';
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShakeshackPage');
  }

}
