import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public foodList:Array<{comida:string,preco:string}> = [
    {
      comida: 'X-Salada',
      preco: '16.40'
    },
    {
      comida: 'X-Bacon',
      preco: '12.40'
    },{
      comida: 'X-Chicken',
      preco: '18.49'
    },
    {
      comida: 'Coxinha',
      preco: '6.40'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public submitForm(form:NgForm){
    console.log(form.value)
  }
}
