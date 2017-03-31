import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Connexion } from '../pages/connexion/connexion';
import { Messages } from '../pages/messages/messages';
import { StaticmessagesPage } from '../pages/staticmessages/staticmessages';
import { Pairform } from '../pages/pairform/pairform';
import { Statmessages } from '../providers/statmessages';
import { RedditData } from '../providers/reddit-data';











@Component({
  templateUrl: 'app.html',
  providers: [Statmessages, RedditData]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Home;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: Home },
      { title: 'Profile', component: Profile },
      { title: 'Connexion', component: Connexion },
      { title: 'Messages', component: Messages },
      { title: 'Static Messages', component: StaticmessagesPage },
      { title: 'Pairform', component: Pairform },






    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
