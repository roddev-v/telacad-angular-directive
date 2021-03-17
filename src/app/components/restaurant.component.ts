import { Component } from "@angular/core";
import { IngredientModel } from "../models/ingredient.model";

@Component({
  selector: "app-restaurant",
  templateUrl: "./restaurant.component.html",
  styleUrls: ["./restaurant.component.css"],
})
export class RestaurantComponent {
  ingredients: IngredientModel[] = [
    {
      name: "Water",
      quantity: 59,
    },
    {
      name: "Potatos",
      quantity: 20,
    },
    {
      name: "Carrots",
      quantity: 59,
    },
    {
      name: "Salt",
      quantity: 78,
    },
    {
      name: "Flour",
      quantity: 53,
    },
    {
      name: "Eggs",
      quantity: 17,
    },
    {
      name: "Milk",
      quantity: 1,
    },
    {
      name: "Onions",
      quantity: 23,
    },
    {
      name: "Tomatos",
      quantity: 88,
    },
    {
      name: "Corn flour",
      quantity: 91,
    },
    {
      name: "Vinegar",
      quantity: 44,
    },
    {
      name: "Oil",
      quantity: 39,
    },
  ];

  getFontSize(ingredient: IngredientModel): string {
    const amount = ingredient.quantity;
    if (amount <= 40) {
      return "14px";
    } else if (amount > 40 && amount <= 60) {
      return "16px";
    } else {
      return "18px";
    }
  }
}
