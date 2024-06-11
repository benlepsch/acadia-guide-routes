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
    // console.log(d);
  }

  selected_area:string = 'otter_cliffs';
}
