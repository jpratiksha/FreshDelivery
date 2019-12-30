import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from '../_models/product.entities';
import { Injectable } from '@angular/core';
import{OrderItem} from '../_models/orderItem.entities';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{
  createDb() {
    const products = [
      {
        id: 1,
        name: "Spinach",
        quantity: "1kg"
      },

      {
          id: 2,
          name: "Lemon",
          quantity: "0.25kg"
      },

      {
          id: 3,
          name: "Carrot",
          quantity: "1kg"
      },

      {
          id: 4,
          name: "Potato",
          quantity: "1kg"
      },

      {
          id: 5,
          name: "Tomato",
          quantity: "1kg"
      },

      {
          id: 6,
          name: "Brinjal",
          quantity: "1kg"
      },

      {
          id: 7,
          name: "Parsley",
          quantity: "0.5kg"
      },

      {
          id: 8,
          name: "Green Bell Pepper",
          quantity: "2kg"
      },

      {
          id: 9,
          name: "Red Bell Pepper",
          quantity: "2kg"
      },

      {
          id: 10,
          name: "Zucchini",
          quantity: "1kg"
      },

    ];
    const orderItem = [
      {
        id:1,
        name: "Spinach",
        quantity: "1kg"
      }
    ];
    return {products,orderItem};
  }

  genId(products: Product[]): number {
    return products.length > 0 ? Math.max(...products.map(product => product.id)) + 1 : 1;
  }

}
