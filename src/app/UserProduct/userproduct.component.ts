import { Component, OnInit } from '@angular/core';

import { Product } from '../_models/product.entities';
import { ProductService } from "../_services/product.service";
import{CartService} from "../_services/cart.service";
import { OrderItem } from '../_models/orderItem.entities';

@Component({
	selector: 'app-userproducts',
    templateUrl: './userproduct.component.html',
    styleUrls: ['./userproduct.component.css']
})

export class UserProductComponent implements OnInit {

	products: Product[];
	cartitem: OrderItem[];
	constructor(
		private productService: ProductService
	) { }

	ngOnInit() {
		this.getProducts();
	  }
	
	  getProducts(): void {
		this.productService.getProducts()
		.subscribe(products => this.products = products);
	  }

	  addCartProducts(id: number): void{
		
	  }
}