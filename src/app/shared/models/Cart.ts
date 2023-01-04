import {CartItem} from "./cartItem";

export class Cart{

  items : CartItem[] = [];

  get totalPrice() : number{
    let totalPrice = 0;
    this.items.forEach(item=>{
      // @ts-ignore
      totalPrice += item.price;
    });

    return totalPrice;
  }
}
