import { Injectable } from '@angular/core';
import {Foods} from "../../shared/models/foods";

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllFood() : Foods[]{
    return [
      {
        id : 1,
        name : 'Mat Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl : '/assets/images/bread-barrel.jpg',
        tags : ['FastFood', 'BreakFast']
      },
      {
        id : 2,
        name : 'M Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl : '/assets/images/caesar.jpg',
        tags : ['SlowFood', 'Lunch']
      },
      {
        id : 3,
        name : 'Araba Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl : '/assets/images/cake.jpg',
        tags : ['FastFood', 'Lunch']
      },
      {
        id : 4,
        name : 'Liz Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl :  '/assets/images/greek-salad.jpg',
        tags : ['SlowFood', 'Supper']
      },
      {
        id : 5,
        name : 'Pat Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl :  '/assets/images/lobster-bisque.jpg',
        tags : ['FastFood', 'Supper']
      },
      {
        id : 6,
        name : 'Mr Jad',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl : '/assets/images/lobster-roll.jpg',
        tags : ['SlowFood', 'Lunch']
      },
      {
        id : 7,
        name : 'Daavi Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl :  '/assets/images/mozzarella.jpg',
        tags : ['SlowFood', 'Lunch']
      },
      {
        id : 8,
        name : 'Elsie Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl : '/assets/images/lobster-roll.jpg',
        tags : ['SlowFood', 'Lunch']
      },
      {
        id : 9,
        name : 'Mat Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl :  '/assets/images/tuscan-grilled.jpg',
        tags : ['SlowFood', 'Lunch']
      },
      {
        id : 10,
        name : 'Mat Cook',
        price : 20,
        cookTime : '20-25',
        favorite : true,
        origin : ['Ghana', 'Nigeria'],
        stars : 4.7,
        imageUrl :   '/assets/images/spinach-salad.jpg',
        tags : ['SlowFood', 'Lunch']
      }
    ];
  }

  getAllFoodByTags(tags : string) : Foods[]{
    if(tags === 'All'){
      return this.getAllFood();
    } else{
      return this.getAllFood().filter(food => food.tags?.includes(tags));
    }
  }

  getAllTags() : void{

  }
}
