import { Injectable } from '@angular/core';
import { Veiculo } from './veiculo';

@Injectable()
export class ServicoService {
  private lista:Veiculo[] = [];
  

  constructor() { }

  add(v:Veiculo):void{
    //let aux: Veiculo = {
    //  marca : v.marca,
    //  modelo: v.modelo,
    //  valor : v.valor
    //};
    this.lista.push(v);
  }

  remove(v: Veiculo):void {
    let indice = this.lista.indexOf(v, 0);
    if (indice > -1) {
      this.lista.splice(indice, 1);
    }
  }
  

}