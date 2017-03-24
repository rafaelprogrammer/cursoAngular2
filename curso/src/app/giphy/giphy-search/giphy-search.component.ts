import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from './giphy-search.service';
import { Response } from '@angular/http';

@Component({
  selector: 'giphy-search',
  templateUrl: './giphy-search.component.html'
})
export class GiphySearchComponent implements OnInit {

  constructor(protected title: Title){

  }

  ngOnInit(){
    this.title.setTitle("GiphySearch...");
  }

}
