import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {SharedModule} from "./shared/shared";
import {BrowserModule} from "@angular/platform-browser";
import {JokeComponent} from "./joke/joke.component";
import {JokeFormComponent} from "./joke/joke-form/joke-form.component";
import {JokeListComponent} from "./joke/joke-list/joke-list.component";

@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeFormComponent,
    JokeListComponent
  ],
  imports: [
    BrowserModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
