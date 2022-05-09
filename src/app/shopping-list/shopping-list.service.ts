import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.modal";

export class ShoppingListService {

    ingredientsChanged = new EventEmitter<Ingredient[]>()

   private Ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Orange',9),
      ];

      getIngredients(){
          return this.Ingredients.slice();//providing a copy of ingredients
      }

      addIngredient(ingredient:Ingredient){
               this.Ingredients.push(ingredient);
               this.ingredientsChanged.emit(this.Ingredients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
            this.Ingredients.push(...ingredients);
            this.ingredientsChanged.emit(this.Ingredients.slice())
      }

}