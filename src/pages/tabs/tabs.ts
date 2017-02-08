import { Component } from '@angular/core';

import { TablefeedPage } from '../tablefeed/tablefeed';
import { MenuPage } from '../menu/menu';
import { FeedbackPage } from '../feedback/feedback';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = TablefeedPage;
  tab2Root: any = MenuPage;
  tab3Root: any = FeedbackPage;

  constructor() {

  }
}
