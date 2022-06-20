import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodList } from '../module/food-list';
@Injectable({
  providedIn: 'root',
})
export class FoodListService {
  public alertEmmiter: EventEmitter<any> = new EventEmitter();
  public list: Array<string> = [
    'Pão de queijo',
    'Pizza',
    'Churrasco',
    'Cachorro quente',
  ];
  public api: any = 'http://localhost:3000/';
  constructor(private httpClient: HttpClient) {}

  public getFoodList(): Observable<Array<FoodList>> {
    return this.httpClient.get<Array<FoodList>>(`${this.api}list-food`).pipe(
      (res) => res,
      (erro) => erro
    );
  }

  public addFoodItem(value: string): Observable<FoodList> {
    return this.httpClient.post<FoodList>(`${this.api}list-food`, {nome:value}).pipe(
      (res) => res,
      (erro) => erro
    )
  }
  public editFoodItem(value: string, id: number): Observable<FoodList> {
    return this.httpClient.put<FoodList>(`${this.api}list-food/${id}`, {nome:value}).pipe(
      (res) => res,
      (erro) => erro
    )
  }
  public deleteFoodItem(id: number): Observable<FoodList> {
    return this.httpClient.delete<FoodList>(`${this.api}list-food/${id}`).pipe(
      (res) => res,
      (erro) => erro
    )
  }

  public foodAddAlert(value: any) {
    return this.alertEmmiter.emit(value);
  }
}
