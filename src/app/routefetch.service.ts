import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoutefetchService {

  url:string;

  constructor(private http:HttpClient) { 
    this.url = 'https://benlepsch.github.io/agr/routes-data.json';
  }

  async getRoutes(callback: Function) {
    this.http.get(this.url).subscribe((respData) => {
      callback(respData);
    });
  }
}
