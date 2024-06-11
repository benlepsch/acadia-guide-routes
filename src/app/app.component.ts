import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

import { RoutefetchService } from './routefetch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  fetcher:RoutefetchService;
  title:string = 'Acadia Guide Routes';
  routes:any;
  base_url:string;

  constructor(private modalService: NgbModal, 
              private http: HttpClient) {
    this.fetcher = new RoutefetchService(this.http);
    
    this.base_url = 'https://benlepsch.github.io/agr/';

    this.fetcher.getRoutes(this.receiveData.bind(this));
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  receiveData(d: any) : void {
    this.routes = d;
    console.log(d);
  }



  selected_area:string = 'otter_cliffs';
  
  // import from json file, this is just to test
  // metadata:any = {
  //   'otter_cliffs': {
  //     'drive_time': '15 minutes',
  //     'approach_time' : '5 minutes'
  //   }
  // }

  // so we could just request this from my github site
  // sans pictures
  // should i do that first? or go straight to mongo
  // routes:any = {
  //   'otter_cliffs': [
  //     {
  //       'name': 'razorback',
  //       'grade': '5.5',
  //       'site': 'top',
  //       'fortym': 'yes',
  //       'pic': 'url?',
  //       'anchor': 'url?',
  //       'beta': 'lower to ledge above the bottom, easy climbing to a big step out right'
  //     }
  //   ]
  // }
}
