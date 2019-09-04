import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  constructor(private s:ServicoService) { }

  ngOnInit() {
  }

  excluir(obj:Veiculo):boolean{
    this.s.remove(obj);
    return false; // para evitar o popup menu
  }

}