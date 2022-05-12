import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.modal";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.modal";

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>()

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
      ];

      constructor(private slService:ShoppingListService){}

      setRecipes(recipes: Recipe[]){
       this.recipes = recipes;
       this.recipesChanged.next(this.recipes.slice())
       console.log('setRecipes')
      }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(index:number){
       return this.recipes[index]
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients)
    }
    
}