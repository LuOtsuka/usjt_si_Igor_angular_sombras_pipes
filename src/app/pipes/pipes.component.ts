import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})

export class PipesComponent{
  valorDoDolar: number = 5.15;
  data = new Date();
  inflacao: number = 0.03;
  valorDecimal: number = 0.55431;

  nome: string = 'Jose da Silva';

  endereco: object = {
    rua: 'Rua K',
    numero: 121,
    bairro: 'Vl Teste',
    cidade: 'Nova Iorque'
  }

}