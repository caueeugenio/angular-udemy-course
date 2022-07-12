import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<router-outlet></router-outlet>
<app-menu></app-menu>
  <!-- <app-food-add></app-food-add> -->
  <!-- <app-food-list></app-food-list> -->
  <!-- <app-reactive-forms></app-reactive-forms> -->
  <!-- <app-forms></app-forms> -->
  <!-- <hr>
  <app-input [contador]="newValue"></app-input>
  <ng-template [ngIf]="getDados">
    <h1>{{getDados.nome}}</h1>
    <h2>{{getDados.idade}}</h2>
  </ng-template>
  <app-output (enviaDados)="setDados($event)"></app-output>
    <button (click)="addValue()">Add</button>
    <app-new-component></app-new-component>
    <app-diretivas-atributos> </app-diretivas-atributos>
    <app-diretivas-estruturais></app-diretivas-estruturais>
    <router-outlet></router-outlet> -->
  `,
})
export class AppComponent {
  public newValue: number = 0;
  public getDados: {nome:string, idade:number} | undefined;
  public addValue(): void {
    this.newValue +=1;
  }

  public setDados(event:{nome:string, idade:number}){
    this.getDados = event;
  }
  // public valor = 0;
  // public destruir: boolean = true;
  // public destruirComponent(): boolean {
  //   return (this.destruir = false);
  // }
  // public adicionar(): Number {
  //   return (this.valor += 1);
  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit');
  // }
  // ngDoCheck(): void {
  //   console.log('ngDoCheck');
  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');
  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');
  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');
  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');
  // }
}
