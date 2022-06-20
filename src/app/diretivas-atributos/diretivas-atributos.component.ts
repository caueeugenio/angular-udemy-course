import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.scss'],
})
export class DiretivasAtributosComponent implements OnInit {
  public valor: boolean = true;
  public newHeight: string = '20px';
  public newBackground: string = 'red';
  public nome: string = '';
  public list: Array<{nome:string}> = [];
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      if (this.valor === true) {
        this.valor = false;
      } else {
        this.valor = true;
      }

      if (this.newHeight === '20px') {
        this.newHeight = '50px';
        this.newBackground = 'blue';
      } else {
        this.newHeight = '20px';
        this.newBackground = 'red';
      }
    }, 2000);


  }

  public salvar(){
    this.list.push({nome: this.nome})
    this.nome = ''  ;
  }
}
