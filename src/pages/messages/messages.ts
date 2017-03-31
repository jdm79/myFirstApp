import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RedditData } from '../../providers/reddit-data';
import { Http } from '@angular/http';
import { RedditDetailPage } from '../../pages/reddit-detail/reddit-detail';


/*
  Generated class for the Messages page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'messages',
  templateUrl: 'messages.html'
})
export class Messages {

  posts:any = [];

  constructor(public navCtrl: NavController, public http: Http, public navParams: NavParams) {}

    // this is the internal messages.ts provider
    // need to use the reddit-data one
    ionViewDidLoad(){
        //this.redditService.getRemoteData();
        this.http.get('https://www.reddit.com/r/glutenfreerecipes/.json').map(res => res.json()).subscribe(data => {
          this.posts = data.data.children;
          console.log(data);
    });
  };

  itemSelected(item) {
    
  }


}
