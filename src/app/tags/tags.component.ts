import { Component, OnInit } from '@angular/core';
import {Tags} from "../shared/models/tags";
import {FoodService} from "../services/food/food.service";

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

   tags : Tags[] = [];
  constructor(private foodService : FoodService) { }

  ngOnInit(): void {
    this.tags = this.foodService.getAllTags();
  }

}
