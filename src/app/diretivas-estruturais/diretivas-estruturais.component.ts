import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-estruturais',
  templateUrl: './diretivas-estruturais.component.html',
  styleUrls: ['./diretivas-estruturais.component.scss'],
})
export class DiretivasEstruturaisComponent implements OnInit {
  public condition: boolean = true;
  public conditionClick: boolean = true;
  public nome: string = '';
  public nomeSwitch: string = '';
  public idade: any = '';
  public disabledButton: boolean = true;
  public list: Array<{ nome: string; idade: number }> = [
    { nome: 'Joao', idade: 12 },
    { nome: 'Maria', idade: 42 },
    { nome: 'Jaime', idade: 19 },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.nome, this.idade);
    setInterval(() => {
      if (this.condition) {
        this.condition = false;
      } else {
        this.condition = true;
      }
    }, 2000);
  }

  public onClick = () => {
    if (this.conditionClick) {
      this.conditionClick = false;
    } else {
      this.conditionClick = true;
    }
  };

  public addList = () => {
    this.list.push({ nome: this.nome, idade: this.idade });
  };

  public removeList = (event: number) => {
    this.list.splice(event, 1);
  };
}
