import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';

@Component({
  selector: 'page-database',
  templateUrl: 'database.html'
})
export class DatabasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ionicStorage: IonicStorageModule ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DatabasePage');
  }

}
