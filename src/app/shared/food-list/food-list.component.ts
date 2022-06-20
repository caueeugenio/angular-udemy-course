import { Component, OnInit } from '@angular/core';
import { FoodList } from 'src/app/module/food-list';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss'],
})
export class FoodListComponent implements OnInit {
  public foodList: Array<FoodList> = [];
  constructor(private foodListService: FoodListService) {}

  ngOnInit(): void {
    this.foodListAll();
    this.sendAlert();
  }

  public foodListAll() {
    this.foodListService.getFoodList().subscribe({
      next: (res) => {
        this.foodList = res;
      },
      error: (erro) => {
        console.log(erro);
      },
    });
  }
  public sendAlert() {
    this.foodListService.alertEmmiter.subscribe({
      next: (res: FoodList) => {
        alert(`Você adicionou uma nova comida => ${res.nome}`);
        return this.foodList.push(res);
      },
      error: (erro: FoodList) => {
        alert(
          `Ocorreu o erro:${erro} no momento de adicionar essa nova comida...`
        );
      },
    });
  }
  public editFood (value:string, id: number) {
    return this.foodListService.editFoodItem(value,id).subscribe({
      next: (res) => {
       res

      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  public removeFood(id: number) {
    return this.foodListService.deleteFoodItem(id).subscribe({
      next: (res) => {
       this.foodList = this.foodList.filter(
        item =>{
          return id !== item.id
        }
       )
      },
      error: (error) => {
        error;
      },
    });
  }
}
