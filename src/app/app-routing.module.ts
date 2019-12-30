import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './product/products.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { ProductDetailComponent }  from './product-detail/product-detail.component';
import { CartComponent } from './cart/cart.component';
import { UserProductComponent } from './UserProduct/userproduct.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'userproducts', component: UserProductComponent },
	{ path: 'cart', component: CartComponent }
];

@NgModule({
  declarations: [],
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }