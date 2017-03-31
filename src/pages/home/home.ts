import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';

/*
  Generated class for the Home page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'home',
  templateUrl: 'home.html'
})
export class Home {


  constructor(public navCtrl: NavController, public navParams: NavParams, private callNumber: CallNumber) {}

  callFunction() {
  this.callNumber.callNumber('++447905780433', true)
      .then(() => console.log('launched dialer!'))
      .catch(() => console.log('error launching dialer'));
};
}
