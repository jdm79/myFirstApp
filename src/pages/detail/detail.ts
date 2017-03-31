import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Pairform } from '../../pages/pairform/pairform';

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'detail',
  templateUrl: 'detail.html'
})
export class Detail {
  item:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item = navParams.get('item');
  }

}
