import { SharedModule } from '../shared/giphy.shared';
import { ContatoRoutingModule } from './contato-routing.module';
import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SharedModule,  ContatoRoutingModule
  ],
  declarations: [ContatoComponent]
})
export class ContatoModule { }
