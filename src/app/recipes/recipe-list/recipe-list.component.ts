import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A test Recipe',
      'Sample Description',
      'https://i1.wp.com/pixahive.com/wp-content/uploads/2021/04/Dhaipuri-407760-pixahive.jpg?fit=778%2C586&ssl=1'
    ),
    new Recipe(
      'A test Recipe',
      'Sample Description',
      'https://i1.wp.com/pixahive.com/wp-content/uploads/2021/04/Dhaipuri-407760-pixahive.jpg?fit=778%2C586&ssl=1'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
