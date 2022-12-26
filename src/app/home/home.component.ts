import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {Foods}  from "../shared/models/foods";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private foods : any;

  constructor(private foodService : FoodService) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAllFood();
    console.log(this.foods)
  }

}
