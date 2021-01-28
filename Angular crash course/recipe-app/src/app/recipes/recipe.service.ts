import { Recipe } from './recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

export class RecipeService {
  // recipeSelected = new EventEmitter<Recipe>();
  recipeSelected: Recipe;

  private recipes: Recipe[] = [
    new Recipe(
      'Falafel',
      'Middle eastern food',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Falafel-7.jpg',
      [new Ingredient('chickpeas', 3), new Ingredient('Water', 5)]
    ),
    new Recipe(
      'Keto Recipe',
      'keto is the best',
      'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/190430-cheesy-bacon-ranch-chicken-226-1556829090.jpg?crop=1.00xw:0.752xh;0,0.151xh&resize=980:*',
      [
        new Ingredient('fats', 50),
        new Ingredient('meat', 50),
        new Ingredient('cauliflower', 50),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
