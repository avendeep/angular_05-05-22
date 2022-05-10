import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs'
import { Ingredient } from "../shared/ingredient.modal";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>()

   private Ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Orange',9),
      ];

      getIngredients(){
          return this.Ingredients.slice();//providing a copy of ingredients
      }

      addIngredient(ingredient:Ingredient){
               this.Ingredients.push(ingredient);
               this.ingredientsChanged.next(this.Ingredients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
            this.Ingredients.push(...ingredients);
            this.ingredientsChanged.next(this.Ingredients.slice())
      }

}