import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the Statmessages provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Statmessages {

  messages: any = [];


  constructor() {
    console.log('Hello Statmessages Provider');
  }

    load(){

      this.messages = [
        {title: "1", summary: "yo"},
        {title: "2", summary: "hey"},
        {title: "3", summary: "malvem"},
        {title: "4", summary: "fuce"},
        {title: "5", summary: "heck"},
        {title: "6", summary: "argh"},
        {title: "7", summary: "yes"},
        {title: "8", summary: "watch out"},
        {title: "9", summary: "lol"},
        {title: "10", summary: "their right"},
        {title: "11", summary: "roflmao"},
        {title: "12", summary: "sorrynotsorry"},
        {title: "13", summary: "hello, world!"},
        {title: "14", summary: "danger will robinson"},
        {title: "15", summary: "yo"},
        {title: "16", summary: "hey"},
        {title: "17", summary: "malvem"},
        {title: "18", summary: "fuce"},
        {title: "19", summary: "heck"},
        {title: "20", summary: "argh"},
        {title: "21", summary: "yes"},
        {title: "22", summary: "watch out"},
        {title: "23", summary: "lol"},
        {title: "24", summary: "their right"},
        {title: "25", summary: "roflmao"},
        {title: "26", summary: "sorrynotsorry"},
        {title: "27", summary: "hello, world!"},
        {title: "28", summary: "danger will robinson"},
        {title: "29", summary: "yo"},
        {title: "30", summary: "hey"},
        {title: "31", summary: "malvem"},
        {title: "32", summary: "fuce"},
        {title: "33", summary: "heck"},
        {title: "34", summary: "argh"},
        {title: "35", summary: "yes"},
        {title: "36", summary: "watch out"},
        {title: "37", summary: "lol"},
        {title: "38", summary: "their right"},
        {title: "39", summary: "roflmao"},
        {title: "40", summary: "sorrynotsorry"},
        {title: "41", summary: "hello, world!"},
        {title: "42", summary: "danger will robinson"},

    ]
  }
};
