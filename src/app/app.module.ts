import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { YumHack } from './app.component';
import { MenuPage } from '../pages/menu/menu';
import { FeedbackPage } from '../pages/feedback/feedback';
import { TablefeedPage } from '../pages/tablefeed/tablefeed';
import { TabsPage } from '../pages/tabs/tabs';
import { ChickfilaPage } from '../pages/chickfila/chickfila';
import { ChipotlePage } from '../pages/chipotle/chipotle';
import { ShakeshackPage } from '../pages/shakeshack/shakeshack';
import { StarbucksPage } from '../pages/starbucks/starbucks';

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
      IonicModule.forRoot(YumHack, { tabsPlacement: 'top' })
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
