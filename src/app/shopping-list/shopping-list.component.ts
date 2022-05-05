import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  Ingredients:Ingredient[] = [
    new Ingredient('Apple',5),
    new Ingredient('Orange',9),
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
