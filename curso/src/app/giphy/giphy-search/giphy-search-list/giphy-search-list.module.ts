import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {GiphySearchListComponent} from "./giphy-search-list.component";
import {GiphySearchListService} from "./giphy-search-list.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [GiphySearchListComponent],
  exports: [GiphySearchListComponent],
  providers: [GiphySearchListService]
})
export class GiphySearchListModule { }
