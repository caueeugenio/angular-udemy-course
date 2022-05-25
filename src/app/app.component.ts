import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <app-title *ngIf="destruir"></app-title>
    <br />
    <button (click)="destruirComponent()">Destruir</button>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  // public valor = 0;
  public destruir: boolean = true;
  public destruirComponent(): boolean {
    return (this.destruir = false);
  }
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
