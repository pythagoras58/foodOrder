import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFoodImages() : string[]{
    return [
      '/assets/images/bread-barrel.jpg',
      '/assets/images/caesar.jpg',
      '/assets/images/cake.jpg',
      '/assets/images/greek-salad.jpg',
      '/assets/images/lobster-bisque.jpg',
      '/assets/images/lobster-roll.jpg',
      '/assets/images/mozzarella.jpg',
      '/assets/images/specials-1.png',
      '/assets/images/specials-2.png',
      '/assets/images/specials-3.png',
      '/assets/images/specials-4.png',
      '/assets/images/specials-5.png',
      '/assets/images/lobster-roll.jpg',
      '/assets/images/tuscan-grilled.jpg',
      '/assets/images/spinach-salad.jpg'
    ];
  }
}
