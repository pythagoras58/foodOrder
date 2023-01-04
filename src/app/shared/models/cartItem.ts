import {Foods} from "./foods";

export class CartItem{

  constructor(food:Foods) {
    this.food = food;
  }
  food : Foods;
  quantity: number = 1;
}
