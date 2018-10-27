import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

//inject shopping list service of type shoppinglist
  constructor(private slService: ShoppingListService) { }

//initilization then assign ingredient to what the shopping service returns
  ngOnInit() {
  this.ingredients = this.slService.getIngredients();
  this.slService.ingredientsChanged
  .subscribe(
    (ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    }
  );
  }
}
