import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../recipes/recipe.modal';
import { RecipeService } from '../recipes/recipe.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    console.log("Data storage service: " + recipes)
    this.http.put(
      'https://react-http-423f4-default-rtdb.firebaseio.com/recipes.json',
      recipes
    ).subscribe(res=>{
        console.log(res)
    });
  }
  ///////////////////////////////////////////
  fetchRecipes(){
      this.http.get<Recipe[]>('https://react-http-423f4-default-rtdb.firebaseio.com/recipes.json')
      .subscribe(recipes=>{
          console.log(recipes)
          this.recipeService.setRecipes(recipes)
      })
  }
}
