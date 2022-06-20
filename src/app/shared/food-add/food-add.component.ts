import { Component, OnInit } from '@angular/core';
import { FoodListService } from 'src/app/services/food-list.service';

@Component({
  selector: 'app-food-add',
  templateUrl: './food-add.component.html',
  styleUrls: ['./food-add.component.scss']
})
export class FoodAddComponent implements OnInit {

  constructor(private foodListService: FoodListService) { }

  ngOnInit(): void {
  }
  public addFoodIntoList(value:string){
    this.foodListService.addFoodItem(value).subscribe( {
      next: (res) => this.foodListService.foodAddAlert(res),
      error: (error) => error
    });

  }

}
