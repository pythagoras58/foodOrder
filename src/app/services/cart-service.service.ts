import { Injectable } from '@angular/core';
import {Cart} from "../shared/models/Cart";
import {Foods} from "../shared/models/foods";

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {

  private cart : Cart = new Cart();
  constructor() { }

  addToCart(food : Foods) : void{
    let cartItem = this.cart.items.find(item=> item.food.id === food.id);
    if(cartItem){
      this.changeQuantity(food.id, cartItem.quantity +1);
      return;
    }
    this.cart.items.push(new cartItem(food));
  }

  removeFromCart(foodId: number): void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);

  }

  changeQuantity(quantity:number, foodId : number):void{

  }

}
