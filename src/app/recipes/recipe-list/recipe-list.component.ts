import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Sample Description',
      'https://i1.wp.com/pixahive.com/wp-content/uploads/2021/04/Dhaipuri-407760-pixahive.jpg?fit=778%2C586&ssl=1'
    ),
    new Recipe(
      'A another Recipe',
      'Sample Description that describes the food in detail',
      'https://www.inspiredtaste.net/wp-content/uploads/2019/07/Crispy-Falafel-Recipe-1200.jpg'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

 onRecipeSelected(recipe:Recipe){
     this.recipeWasSelected.emit(recipe)
 }


}
