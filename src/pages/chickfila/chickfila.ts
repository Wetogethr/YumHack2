import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Chickfila page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-chickfila',
  templateUrl: 'chickfila.html'
})
export class ChickfilaPage {
    chickfilas: Array<{name: string, image: string, order: string, icon: string, showOrder: boolean}> = [];

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        for (let i = 0; i < 1; i++) {
            this.chickfilas.push({
                name: 'Buffalo Chicken Sandwich',
                image: 'assets/icon/chickfila/8.png',
                order: 'Ask for Buffalo Sauce on your Spicy Chicken Sandwich',
                icon: 'add',
                showOrder: false
            }, {
                    name: 'Chicken Quesadilla',
                    image: 'assets/icon/chickfila/4.png',
                    order: 'Ask if they make a Chicken Quesadilla. Not all locations will be able to.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Free IceDream',
                    image: 'assets/icon/chickfila/6.png',
                    order: 'Ask to replace your Kid\'s Meal toy with an Ice Dream.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Fried Chicken Club',
                    image: 'assets/icon/chickfila/7.png',
                    order: 'Ask if they can swap out the char-broiled chicken with a piece of fried chicken.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Root Beer Float',
                    image: 'assets/icon/chickfila/1.png',
                    order: 'Ask them to add vanilla ice dream to your root beer.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Spicy Char',
                    image: 'assets/icon/chickfila/3.png',
                    order: 'Ask for a Spicy Char-Grilled Chicken Patty instead of the regular Char-Grilled Chicken Patty.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Spicy Chicken, Egg, & Cheese Biscuit',
                    image: 'assets/icon/chickfila/2.png',
                    order: 'Ask for The Spicy Chicken, Egg, & Cheese Biscuit.',
                    icon: 'add',
                    showOrder: false
                }, {
                    name: 'Strawberry Peach Hand-Spun Milkshake',
                    image: 'assets/icon/chickfila/5.png',
                    order: 'Ask to add strawberry to your Peach Hand-Spun Milkshake.',
                    icon: 'add',
                    showOrder: false
                });
        }
    }

    toggleOrder(chickfilas) {
        if (chickfilas.showOrder) {
            chickfilas.showOrder = false;
            chickfilas.icon = 'add';
        } else {
            chickfilas.showOrder = true;
            chickfilas.icon = 'remove';
        }
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChickfilaPage');
  }

}
