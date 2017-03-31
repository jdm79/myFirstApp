import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Home } from '../pages/home/home';
import { Profile } from '../pages/profile/profile';
import { Connexion } from '../pages/connexion/connexion';
import { Messages } from '../pages/messages/messages';
import { StaticmessagesPage } from '../pages/staticmessages/staticmessages';
import { Statmessages } from '../providers/statmessages';
import { RedditData } from '../providers/reddit-data';
import { Pairform } from '../pages/pairform/pairform';
import { Detail } from '../pages/detail/detail';
import { CallNumber } from '@ionic-native/call-number';







@NgModule({
  declarations: [
    MyApp,
    Home,
    Profile,
    Connexion,
    Messages,
    StaticmessagesPage,
    Pairform,
    Detail,


  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Home,
    Profile,
    Connexion,
    Messages,
    StaticmessagesPage,
    Pairform,
    Detail,




  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, RedditData, Statmessages, CallNumber]
})
export class AppModule {}
