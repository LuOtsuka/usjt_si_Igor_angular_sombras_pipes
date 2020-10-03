import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SombraDirective } from './sombra.directive';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, SombraDirective, PipesComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
