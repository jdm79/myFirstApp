import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Detail } from '../../pages/detail/detail';


/*
  Generated class for the Pairform page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'pairform',
  templateUrl: 'pairform.html'
})
export class Pairform {

  items:any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.items = [];
      for (let i=0; i < 30; i++) {
          this.items.push({
              text: "item " + i,
              id: i
          });
      }
  }

  itemSelected(item) {
      this.navCtrl.push(Detail, {
        item: item
      });
  }

}
