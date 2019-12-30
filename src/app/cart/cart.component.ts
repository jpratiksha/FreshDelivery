import { Component, OnInit } from '@angular/core';
import { OrderItem } from '../_models/orderItem.entities';
import {CartService} from "../_services/cart.service"

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  orderitems: OrderItem[];
  constructor( private cartService: CartService) { }

  ngOnInit() {
    this.getItems();
  }

  getItems(): void {
    
  }

}

