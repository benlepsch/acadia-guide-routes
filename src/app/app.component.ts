import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

import { RoutefetchService } from './routefetch.service';
import { debounceTime } from 'rxjs';

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
    
    this.base_url = '';//'https://benlepsch.github.io/agr/';

    this.fetcher.getRoutes(this.receiveData.bind(this));
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  receiveData(d: any) : void {
    let printed:boolean = false;
    for (let key of Object.keys(d)) {
      for (let r of d[key]) {
        if (!("pic_txt" in r)) {
          r["pic_txt"] = "";
        }

        if (!("anchor_txt" in r)) {
          r["anchor_txt"] = "";
        }
      }
      if (!printed && (key == 'south_wall' || key == 'otter_cliffs')) {
        console.log(d[key]);
        printed = true;
      }
    }

    this.routes = d;
    // console.log(d);
  }

  selected_area:string = 'otter_cliffs';
}
