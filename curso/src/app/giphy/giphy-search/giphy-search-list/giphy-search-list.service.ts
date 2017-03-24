import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Http, Response} from "@angular/http";

@Injectable()
export class GiphySearchListService {

  constructor(private http: Http) {
  }

  pesquisarGiphy(): Observable<Response> {
    let url = 'http://api.giphy.com/v1/gifs/search?q=a&api_key=dc6zaTOxFJmzC&limit=10';
    return this.http.get(url);
  }
}
