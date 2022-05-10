import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  Ingredients: Ingredient[];
  private igChangeSub :Subscription

  constructor(private slService: ShoppingListService) {}

  ngOnInit(): void {
    this.Ingredients = this.slService.getIngredients();
    this.igChangeSub = this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>{
        this.Ingredients = ingredients
      }
    )
  }

  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
}
