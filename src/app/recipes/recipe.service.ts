import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.modal";

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
        new Recipe(
          'A test Recipe',
          'Sample Description',
          'https://i1.wp.com/pixahive.com/wp-content/uploads/2021/04/Dhaipuri-407760-pixahive.jpg?fit=778%2C586&ssl=1',
          [
              new Ingredient('Beans',1),
              new Ingredient('French Fries', 20)
          ]
        ),
        new Recipe(
          'A another Recipe',
          'Sample Description that describes the food in detail',
          'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg',
          [
              new Ingredient('Buns',2),
              new Ingredient('carrot',3)
          ]
        ),
      ];

      constructor(private slService:ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients)
    }
    
}