import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lembrete: string = '';
  lembretes: Array<String> = [];

  salvar(){
    this.lembretes = [this.lembrete, ...this.lembretes];
    this.lembrete = '';
  }
}
