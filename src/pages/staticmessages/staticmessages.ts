import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Statmessages } from '../../providers/statmessages';

/*
  Generated class for the Staticmessages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-staticmessages',
  templateUrl: 'staticmessages.html'
})
export class StaticmessagesPage {


  constructor(public navCtrl: NavController, public statMessageService: Statmessages) {}

  ionViewDidLoad() {
      this.statMessageService.load();
  }


};
