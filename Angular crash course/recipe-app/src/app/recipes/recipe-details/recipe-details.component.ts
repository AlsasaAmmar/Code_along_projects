import { Component, OnInit, Input } from '@angular/core';
import { Ingredient } from 'src/app/Shared/ingredient.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})
export class RecipeDetailsComponent implements OnInit {
  recipe;
  constructor(private ShoppingListService: ShoppingListService) {}

  ngOnInit(): void {}
  toShoppingList() {
    this.ShoppingListService.loadIng(this.recipe.ingredients);
  }
}
