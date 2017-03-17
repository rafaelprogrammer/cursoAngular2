import {Injectable} from '@angular/core';
import { REQUESTGIPHY } from './request-giphy.stub';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class GiphyService {
  constructor(private http:Http){
  }

  pesquisarGiphy(): Observable<Response> {
    const url = 'http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC&limit=1&offset=0';
    return this.http.get(url);
  }
}