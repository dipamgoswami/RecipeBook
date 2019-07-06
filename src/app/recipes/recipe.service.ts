import { Recipe} from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Tasty Pizza',
     'Just Awesome!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSOVunbHrsDvkj8hFXkVOFzIEacx9asADHqDLCpTY2hNPmm6_b0w',
      [
        new Ingredient('Bread', 1),
        new Ingredient('cheese', 2),
        new Ingredient('corn', 10)
      ]),
    new Recipe('Big Fat Burger',
     'Thats finger licking good!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFq40MZI6xs7RHopv_zDW4KnW5K9uL1MI8AMg3mbypsVQOfmDbA',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Buns', 2)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addingToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredient(ingredients);
  }
}
