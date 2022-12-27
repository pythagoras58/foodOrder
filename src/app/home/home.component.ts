import { Component, OnInit } from '@angular/core';
import {FoodService} from "../services/food/food.service";
import {Foods}  from "../shared/models/foods";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   foods : Foods[] = [];

  constructor(private foodService : FoodService, private router : ActivatedRoute) { }

  ngOnInit(): void {
    this.foods = this.foodService.getAllFood();
    console.log(this.foods)
  }

}
