import {Injectable} from '@angular/core';
import {Product} from '../_models/product.entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {OrderItem} from '../_models/orderItem.entities'

@Injectable()
export class CartService {
  private itemsInCart: OrderItem[] = [];
  private cartsUrl = 'api/cart';  

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient, private messageService: MessageService) { }

  getCartProducts (): Observable<OrderItem[]> {
    return this.http.get<OrderItem[]>(this.cartsUrl)
      .pipe(
        tap(_ => this.log('fetched cart items')),
        catchError(this.handleError<OrderItem[]>('getCartProducts', []))
      );
  }
  
  addCartProducts (itemsInCart: OrderItem): Observable<OrderItem> {
    return this.http.post<OrderItem>(this.cartsUrl, itemsInCart, this.httpOptions).pipe(
      tap((newProduct: OrderItem) => this.log(`added item in cart w/ id=${newProduct.id}`)),
      catchError(this.handleError<OrderItem>('addCartProduct'))
    );
  }

  deleteCartProducts (itemsInCart: OrderItem | number): Observable<OrderItem> {
    const id = typeof itemsInCart === 'number' ? itemsInCart : itemsInCart.id;
    const url = `${this.cartsUrl}/${id}`;

    return this.http.delete<OrderItem>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted cart item id=${id}`)),
      catchError(this.handleError<OrderItem>('deleteCartProduct'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CartService: ${message}`);
  }
}