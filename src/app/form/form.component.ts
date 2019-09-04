import { Component, OnInit } from '@angular/core';
import { ServicoService } from '../servico.service';
import { Veiculo } from '../veiculo';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  private marcas: string[] = ['Acura','Alfa Romeo','AMC','Audi','Abarth','Aston Martin','BAC','BMW','Bugatti','Cadillac','Chery','Dodge','Ferrari','Fiat','Gurgel','Honda','Hummer','Hyundai','Holden','Infiniti','Jaguar','Ford','Pagani','Land Rover','Lamborghini','Lancia','Lotus','Lifan','Mazda','Mercedes-Benz','Maserati','McLaren','Mini','Mitsubishi','Nissan','Noble','Opel','Plymouth','Peugeot','Pontiac','Koenigsegg','Renault','Chevrolet','Toyota','Subaru','Volkswagen','Volvo'];
  private veiculo : Veiculo = new Veiculo();

  constructor(private s:ServicoService){}  

  ngOnInit() {
    this.reset();
  }

  add(): void{
    this.s.add(this.veiculo);
    this.veiculo = new Veiculo();
  }

  reset(): void{
    this.veiculo = {
      marca: undefined,
      modelo : undefined,
      valor : undefined
    };
  }





}