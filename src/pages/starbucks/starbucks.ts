import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Starbucks page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-starbucks',
  templateUrl: 'starbucks.html'
})
export class StarbucksPage {
    starbuckss: Array<{ name: string, image: string, order: string, icon: string, showOrder: boolean }> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 1; i++) {
            this.starbuckss.push({
                name: 'Cotton Candy Frappuccino',
                image: 'assets/icon/starbucks/cc.png',
                order: 'Ask for a Vanilla Bean Frappuccino with Raspberry Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti.',
                icon: 'add',
                showOrder: false
            }, {
                    name: 'Cookie Dough Frappuccino',
                    image: 'assets/icon/starbucks/cd.png',
                    order: 'Ask for a Cinnamon Dolce Creme Frappuccino with Mocha Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti - java chips blended in, and top with cookie crumble and chocolate whip.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Twix Frappuccino',
                    image: 'assets/icon/starbucks/twix.png',
                    order: 'Ask for a Caramel Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - java chips and whipped cream blended in, coat the cup with caramel sauce, and top with mocha drizzle.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Red Velvet Frappuccino',
                    image: 'assets/icon/starbucks/rv.png',
                    order: 'Ask for a half White Mocha/half regular Mocha Frappuccino with Raspberry Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Butterbeer Frappuccino',
                    image: 'assets/icon/starbucks/bb.png',
                    order: 'Ask for a Creme Frappuccino - WHOLE MILK IS NEEDED FOR THE RIGHT CONSISTENCY - with 3 pumps of Caramel Syrup, 3 pumps of Toffee Nut Syrup, and topped with caramel drizzle.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'S\'mores Frappuccino',
                    image: 'assets/icon/starbucks/smores.png',
                    order: 'Ask for a Double Chocolate Chip or Java Chip Frappuccino with 1 pump of Cinnamon Dolce Syrup, 1 pump of Toffee Nut Syrup, whipped cream blended in, and topped with whipped cream and Cinnamon Dolce sprinkles.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Ferrero Rocher Frappuccino',
                    image: 'assets/icon/starbucks/fr.png',
                    order: 'Ask for a Java Chip or Double Chocolate Chip Frappuccino with Mocha Syrup - 2 pumps for tall, 3 pumps for grande, and 3.5 pumps for venti - Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - add Hazelnut drizzle, and top with whipped cream.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Birthday Cake Frappuccino',
                    image: 'assets/icon/starbucks/bc.png',
                    order: 'Ask for a Vanilla Bean Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti. Not all Starbucks locations do this, but you also have the option of asking them to blend a cake pop into your Vanilla Bean Frappuccino.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Oreo Frappuccino',
                    image: 'assets/icon/starbucks/oreo.png',
                    order: 'Ask for a Double Chocolate Chip Frappuccino with white mocha sauce instead of regular mocha, and topped with chocolate or regular whipped cream. Alternatively, if you\'d prefer more creme than chocolate cookie flavor, ask for a Vanilla Bean Frappuccino with java chips blended in and topped with mocha syrup and/or cookie crumbles.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Cap\'n Crunch Frappuccino',
                    image: 'assets/icon/starbucks/cap.png',
                    order: 'Ask for a Strawberry and Creme Frappuccino with Caramel Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti - Toffe Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - Hazelnut Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti. You can also ask for java chips if you\'d like some crunch.',
                    icon: 'add',
                    showOrder: false
                });
        }
    }

    toggleOrder(starbuckss) {
        if (starbuckss.showOrder) {
            starbuckss.showOrder = false;
            starbuckss.icon = 'add';
        } else {
            starbuckss.showOrder = true;
            starbuckss.icon = 'remove';
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StarbucksPage');
  }

}
