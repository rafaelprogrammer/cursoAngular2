import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClienteModule } from './cliente/cliente.module';
import { GiphyComponent } from './giphy/giphy.component';
import { GiphyModule } from './giphy/giphy.module';
import { GiphyService } from './giphy/giphy.service';
import { SharedModule } from './shared/giphy.shared';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GiphyModule,
    ClienteModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
