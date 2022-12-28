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

    this.router.params.subscribe((params)=>{
      if(params['searchItem']){
        this.foods = this.foodService.getAllFood().filter(food => food.name.toLowerCase().includes(params['searchItem'].toLowerCase()));
      }
      else if(params['tags']){
        this.foods = this.foodService.getAllFoodByTags().filter(food => food.tags?.includes(params['tags'].toLowerCase()));
      }
      else{
        this.foods = this.foodService.getAllFood();
      }
    })


    console.log(this.foods)
  }

}
