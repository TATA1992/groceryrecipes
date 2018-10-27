import { EventEmitter, Injectable } from '@angular/core';

//add models you want to leverage
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

//add service you want to injection
import { ShoppingListService } from '../shopping-list/shopping-list.service';

//inject service into the service via @inject
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
    'This is simply a test',
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg',
  [
    new Ingredient('Meat', 1),
    new Ingredient('French Fries', 20)
  ]),
    new Recipe('Big Fat Burger',
    'What else do you need to say?',
    'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg)',
  [
    new Ingredient('Buns', 2),
    new Ingredient('Meat', 1)
  ])
  ];
//since we did inject, we can inject the service via constructor
  constructor(private slService: ShoppingListService){}

//method that returns the array and give us access from outside, since private
  getRecipe() {
    //slice with no arg returns a new array, which is exact copy as this file
    return this.recipes.slice();
  }
//this method will be the method that lets you log shopping list data
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    //now use ShoppingListService with slservice name
    this.slService.addIngredients(ingredients);

  }
}
