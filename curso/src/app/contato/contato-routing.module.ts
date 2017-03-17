import { ContatoComponent } from './contato.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'contato', component: ContatoComponent}
    ])
  ],
})
export class ContatoRoutingModule { }
