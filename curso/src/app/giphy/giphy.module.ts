
import { SharedModule } from '../shared/giphy.shared';
import { GiphtRoutingModule } from './giphy-routing.module';
import { GiphyComponent } from './giphy.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [SharedModule, GiphtRoutingModule],
  declarations: [GiphyComponent],
  exports: [GiphyComponent],
  providers: []
})
export class GiphyModule {
}