import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];

  //add method to return a copy of the ingredient, not orginal copy
  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    //access ingredient and then push the new ingredient on it
    this.ingredients.push(ingredient);
    //everytime we call the array we will call this ingredient + EventEmitter
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  //recipe service need a method
  //receives list of ingredients with type Ingredient array
  addIngredients(ingredients: Ingredient[]) {
    //now add the code to add them to the list of array, so loop through

// option A: this way of adding ingredients causes a lot of events to be emitted
/*    for (let ingredient of ingredients) {
      this.addIngredient(ingredient);
    }
  */

//code will make the entire list an array into the list of ingredients array
  this.ingredients.push(...ingredients);
  //code says that emits ingredients changed
  this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
