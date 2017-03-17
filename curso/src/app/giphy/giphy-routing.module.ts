import { GiphyComponent } from './giphy.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'giphy', component: GiphyComponent}
    ])
  ]
})
export class GiphtRoutingModule {
}