import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the RedditData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class RedditData {

  posts:any;

  constructor(public http: Http) {
  }

  getRemoteData(){

    // to subscribe to this api data feed, add .subscribe and create
    // name of data you want to play with
    // subscribe to the observables and all that it emits
    // we use map operator to clean up the data and display it
    // converts the response to a json data object we can actually use
    // initially it's just a json string, not a js object we can work with
    // data found in the _body of the json string
    // the .json() method on the Response object will parse the json
    // to a javascript object we can work with
    this.http.get('https://www.reddit.com/r/webdev/.json').map(res => res.json()).subscribe(data => {
      this.posts = data.data.children;
      console.log(data);
      });
  }
}
