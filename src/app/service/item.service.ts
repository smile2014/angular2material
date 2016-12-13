import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class ItemService {
  _data: any;
  constructor(private http: Http) { }

  getAllItems() {
    
  }
}
