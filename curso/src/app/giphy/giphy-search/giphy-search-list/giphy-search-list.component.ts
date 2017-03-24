import { Component, OnInit, Input } from '@angular/core';
import {Response} from "@angular/http";
import {GiphySearchListService} from "./giphy-search-list.service";

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  gifs: any[] = [];

  constructor(private giphySearchListService: GiphySearchListService) {
  }

  ngOnInit() {
    this.giphySearchListService.pesquisarGiphy().subscribe((response: Response) => this.gifs = response.json().data);
  }

}
