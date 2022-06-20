import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss'],
})
export class OutputComponent implements OnInit {
  @Output() public enviaDados = new EventEmitter();
  public list: Array<{ nome: string; idade: number }> = [
    {
      nome: 'Maria',
      idade: 32,
    },
    {
      nome: 'José',
      idade: 23,
    },
    {
      nome: 'Pedro',
      idade: 12,
    },
    {
      nome: 'Catarina',
      idade: 22,
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  getDados(event: number) {
   this.enviaDados.emit(this.list[event]);
  }
}
