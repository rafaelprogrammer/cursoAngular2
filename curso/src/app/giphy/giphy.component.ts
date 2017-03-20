import { Component, OnInit } from '@angular/core';
import { REQUESTGIPHY } from './request-giphy.stub';
import { GiphyService } from './giphy.service';
import { Response } from '@angular/http';

@Component({
  selector: 'giphy-component',
  templateUrl: './giphy.component.html',
  styleUrls: ['./giphy.component.css']
})
export class GiphyComponent implements OnInit {

  gifs: any[] = [];
  constructor(private giphyService: GiphyService) {
  }

  ngOnInit(): void {
    this.giphyService.pesquisarGiphy().subscribe((response: Response) => this.gifs = response.json().data);
  }

}
