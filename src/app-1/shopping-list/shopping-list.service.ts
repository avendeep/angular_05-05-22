import { EventEmitter } from "@angular/core";
import {Subject} from 'rxjs'
import { Ingredient } from "../shared/ingredient.modal";

export class ShoppingListService {

    ingredientsChanged = new Subject<Ingredient[]>()//alternative to EventEmitter()
    startedEditing = new Subject<number>()

   private Ingredients:Ingredient[] = [
        new Ingredient('Apple',5),
        new Ingredient('Orange',9),
      ];

      getIngredients(){
          return this.Ingredients.slice();//providing a copy of ingredients
      }

      getIngredient(index:number){
          return this.Ingredients[index];
      }

      addIngredient(ingredient:Ingredient){
               this.Ingredients.push(ingredient);
               this.ingredientsChanged.next(this.Ingredients.slice())
      }

      addIngredients(ingredients:Ingredient[]){
            this.Ingredients.push(...ingredients);
            this.ingredientsChanged.next(this.Ingredients.slice())
      }

      updateIngredient(index:number, newingredient: Ingredient){
           this.Ingredients[index] = newingredient;
           this.ingredientsChanged.next(this.Ingredients.slice())//with .slice() providing copy of an array
      }

      deleteIngredient(index:number){
          this.Ingredients.splice(index,1)
          this.ingredientsChanged.next(this.Ingredients.slice())
      }

}