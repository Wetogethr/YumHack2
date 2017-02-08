import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-tablefeed',
  templateUrl: 'tablefeed.html'
})
export class TablefeedPage {

    items: Array<{ restaurant: string, name: string, image: string, order: string, logo: string, showOrder: boolean}> = [];

  constructor(public navCtrl: NavController) {
      for (let i = 0; i < 1; i++) {
          this.items.push({
                  restaurant: 'Chick-fil-A',
                  name: 'Buffalo Chicken Sandwich',
                  image: 'assets/icon/chickfila/8.png',
                  order: 'Ask for Buffalo Sauce on your Spicy Chicken Sandwich',
                  logo: 'assets/icon/cfa.jpg',
                  showOrder: false
              }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Chicken Quesadilla',
                      image: 'assets/icon/chickfila/4.png',
                      order: 'Ask if they make a Chicken Quesadilla. Not all locations will be able to.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Free IceDream',
                      image: 'assets/icon/chickfila/6.png',
                      order: 'Ask to replace your Kid\'s Meal toy with an Ice Dream.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Fried Chicken Club',
                      image: 'assets/icon/chickfila/7.png',
                      order: 'Ask if they can swap out the char-broiled chicken with a piece of fried chicken.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Root Beer Float',
                      image: 'assets/icon/chickfila/1.png',
                      order: 'Ask them to add vanilla ice dream to your root beer.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Spicy Char',
                      image: 'assets/icon/chickfila/3.png',
                      order: 'Ask for a Spicy Char-Grilled Chicken Patty instead of the regular Char-Grilled Chicken Patty.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Spicy Chicken, Egg, & Cheese Biscuit',
                      image: 'assets/icon/chickfila/2.png',
                      order: 'Ask for The Spicy Chicken, Egg, & Cheese Biscuit.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Chick-fil-A',
                      name: 'Strawberry Peach Hand-Spun Milkshake',
                      image: 'assets/icon/chickfila/5.png',
                      order: 'Ask to add strawberry to your Peach Hand-Spun Milkshake.',
                      logo: 'assets/icon/cfa.jpg',
                      showOrder: false
                  },
                  /* Chipotle */
                  {
                      restaurant: 'Chipotle',
                      name: 'Burritodilla',
                      image: 'assets/icon/chipotle/burritodilla.png',
                      order: 'Ask for a burrito - with half the amount of fillings so that it won\'t overflow - to be grilled up like a quesadilla.',
                      logo: 'assets/icon/chipotle.svg',
                      showOrder: false
                  }, {
                      restaurant: 'Chipotle',
                      name: 'Nachos',
                      image: 'assets/icon/chipotle/nachos.png',
                      order: 'Ask for a Burrito Bowl with chips instead of rice.',
                      logo: 'assets/icon/chipotle.svg',
                      showOrder: false
                  }, {
                      restaurant: 'Chipotle',
                      name: 'Quesadilla',
                      image: 'assets/icon/chipotle/quesadilla.png',
                      order: 'Ask for a quesadilla.',
                      logo: 'assets/icon/chipotle.svg',
                      showOrder: false
                  }, {
                      restaurant: 'Chipotle',
                      name: 'Quesarito',
                      image: 'assets/icon/chipotle/quesarito.png',
                      order: 'Ask for a Cheese Quesadilla to be used as the shell for your burrito.',
                      logo: 'assets/icon/chipotle.svg',
                      showOrder: false
                  }, {
                      restaurant: 'Chipotle',
                      name: 'Single Taco',
                      image: 'assets/icon/chipotle/taco.png',
                      order: 'Ask for a single taco.',
                      logo: 'assets/icon/chipotle.svg',
                      showOrder: false
                  },
                  /* Shake Shack - 18 */
                  {
                      restaurant: 'Shake Shack',
                      name: 'Peanut Butter & Bacon ShackBurger',
                      image: 'assets/icon/shakeshack/pbnb.png',
                      order: 'Ask for peanut sauce on the side of your Bacon Shackburger - then pour over your burger.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'The Smoke Shack Quad Burger',
                      image: 'assets/icon/shakeshack/quad.png',
                      order: 'Ask for it by name.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Shack-Cago Burger',
                      image: 'assets/icon/shakeshack/cago.png',
                      order: 'Order the Chicago style hotdog and transfer the toppings to your burger.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Grilled Cheese Sandwich',
                      image: 'assets/icon/shakeshack/grilledcheese.png',
                      order: 'Order by name and have the option of bacon on the side.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'The Shandy',
                      image: 'assets/icon/shakeshack/Shandy.png',
                      order: 'Order by name - if your location is unfamiliar with it, ask for some beer in your lemonade.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Chili Pepper Cheese Fries',
                      image: 'assets/icon/shakeshack/fries.png',
                      order: 'Ask for chili peppers on your cheese fries.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Protein Style Burger',
                      image: 'assets/icon/shakeshack/proteinstyle.png',
                      order: 'Ask for it "protein style" - or without the bun - and they\'ll wrap it in lettuce.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Ice Cream Sandwich',
                      image: 'assets/icon/shakeshack/ics.png',
                      order: 'Ask for toasted buns on the side of your ice cream - then smash the ice cream between those buns.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  }, {
                      restaurant: 'Shake Shack',
                      name: 'Beer Float',
                      image: 'assets/icon/shakeshack/rbf.png',
                      order: 'Order a beer and ask for a scoop of your favorite custard to be added in.',
                      logo: 'assets/icon/shakeshack.jpg',
                      showOrder: false
                  },
                  /* Starbucks - 27 */
                  {
                      restaurant: 'Starbucks',
                      name: 'Cotton Candy Frappuccino',
                      image: 'assets/icon/starbucks/cc.png',
                      order: 'Ask for a Vanilla Bean Frappuccino with Raspberry Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Cookie Dough Frappuccino',
                      image: 'assets/icon/starbucks/cd.png',
                      order: 'Ask for a Cinnamon Dolce Creme Frappuccino with Mocha Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti - java chips blended in, and top with cookie crumble and chocolate whip.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Twix Frappuccino',
                      image: 'assets/icon/starbucks/twix.png',
                      order: 'Ask for a Caramel Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - java chips and whipped cream blended in, coat the cup with caramel sauce, and top with mocha drizzle.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Red Velvet Frappuccino',
                      image: 'assets/icon/starbucks/rv.png',
                      order: 'Ask for a half White Mocha/half regular Mocha Frappuccino with Raspberry Syrup - 1 pump for tall, 2 pumps for grande, and 3 pumps for venti.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Butterbeer Frappuccino',
                      image: 'assets/icon/starbucks/bb.png',
                      order: 'Ask for a Creme Frappuccino - WHOLE MILK IS NEEDED FOR THE RIGHT CONSISTENCY - with 3 pumps of Caramel Syrup, 3 pumps of Toffee Nut Syrup, and topped with caramel drizzle.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'S\'mores Frappuccino',
                      image: 'assets/icon/starbucks/smores.png',
                      order: 'Ask for a Double Chocolate Chip or Java Chip Frappuccino with 1 pump of Cinnamon Dolce Syrup, 1 pump of Toffee Nut Syrup, whipped cream blended in, and topped with whipped cream and Cinnamon Dolce sprinkles.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Ferrero Rocher Frappuccino',
                      image: 'assets/icon/starbucks/fr.png',
                      order: 'Ask for a Java Chip or Double Chocolate Chip Frappuccino with Mocha Syrup - 2 pumps for tall, 3 pumps for grande, and 3.5 pumps for venti - Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - add Hazelnut drizzle, and top with whipped cream.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Birthday Cake Frappuccino',
                      image: 'assets/icon/starbucks/bc.png',
                      order: 'Ask for a Vanilla Bean Frappuccino with Hazelnut Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti. Not all Starbucks locations do this, but you also have the option of asking them to blend a cake pop into your Vanilla Bean Frappuccino.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Oreo Frappuccino',
                      image: 'assets/icon/starbucks/oreo.png',
                      order: 'Ask for a Double Chocolate Chip Frappuccino with white mocha sauce instead of regular mocha, and topped with chocolate or regular whipped cream. Alternatively, if you\'d prefer more creme than chocolate cookie flavor, ask for a Vanilla Bean Frappuccino with java chips blended in and topped with mocha syrup and/or cookie crumbles.',
                      logo: 'img/starbucks.svg.png',
                      showOrder: false
                  }, {
                      restaurant: 'Starbucks',
                      name: 'Cap\'n Crunch Frappuccino',
                      image: 'assets/icon/starbucks/cap.png',
                      order: 'Ask for a Strawberry and Creme Frappuccino with Caramel Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti - Toffe Syrup - 1 pump for tall, 1.5 pumps for grande, and 2 pumps for venti - Hazelnut Syrup - 1/2 pump for tall, 1 pump for grande, and 1.5 pumps for venti. You can also ask for java chips if you\'d like some crunch.',
                      logo: 'assets/icon/starbucks.svg.png',
                      showOrder: false
                  });

          this.items.sort(function () {
              return 0.5 - Math.random()
          });
      }
    }

    toggleOrder(items) {
        if (items.showOrder) {
            items.showOrder = false;
            items.icon = 'add';
        } else {
            items.showOrder = true;
            items.icon = 'remove';
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad StarbucksPage');
    }

}