import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
/*import { AngularFireModule } from 'angularfire2';*/
import { YumHack } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { FeedbackPage } from '../pages/feedback/feedback';
import { TablefeedPage } from '../pages/tablefeed/tablefeed';
import { TabsPage } from '../pages/tabs/tabs';
import { ChickfilaPage } from '../pages/chickfila/chickfila';
import { ChipotlePage } from '../pages/chipotle/chipotle';
import { ShakeshackPage } from '../pages/shakeshack/shakeshack';
import { StarbucksPage } from '../pages/starbucks/starbucks';

/* export const firebaseConfig = {
    apiKey: "AIzaSyDd6h165WKpMU2IcR4YqqLo8sbRVzXyZic",
    authDomain: "yumhack-c5653.firebaseapp.com",
    databaseURL: "https://yumhack-c5653.firebaseio.com",
    storageBucket: "yumhack-c5653.appspot.com",
    messagingSenderId: "483133115561"
}; */

@NgModule({
  declarations: [
    YumHack,
    MenuPage,
    FeedbackPage,
    TablefeedPage,
    TabsPage,
    ChickfilaPage,
    ChipotlePage,
    ShakeshackPage,
    StarbucksPage
  ],
  imports: [
      IonicModule.forRoot(YumHack, { tabsPlacement: 'top' })/*,
      AngularFireModule.initializeApp(firebaseConfig)*/
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    YumHack,
    MenuPage,
    FeedbackPage,
    TablefeedPage,
    TabsPage,
    ChickfilaPage,
    ChipotlePage,
    ShakeshackPage,
    StarbucksPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
