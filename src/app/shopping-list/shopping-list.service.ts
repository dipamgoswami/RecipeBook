import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {

  private ingredients: Ingredient[] = [
    new Ingredient('apples', 6),
    new Ingredient('mangoes', 10)
  ];

  getIngredients(){
    return this.ingredients;
  }
  addIngredients(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
  }
  addIngredient(ingredients: Ingredient[]) {
   // for(let ingredient of ingredients) {
     // this.addIngredients(ingredient);
    //}
    this.ingredients.push(...ingredients);
  }

}
