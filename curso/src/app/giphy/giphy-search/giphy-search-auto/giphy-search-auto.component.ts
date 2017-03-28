import { Component, OnInit } from '@angular/core';
import { GiphySearchComponent } from '../giphy-search.component';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Response } from '@angular/http';


@Component({
  selector: 'giphy-search-auto',
  templateUrl: './giphy-search-auto.component.html'
})
export class GiphySearchAutoComponent  extends GiphySearchComponent{

  constructor(protected title: Title, protected giphySearchService: GiphySearchService){
    super(title,giphySearchService);
  }

  ngOnInit(){
    this.title.setTitle("GiphySearchAuto...");
  }

}
