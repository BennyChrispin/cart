import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);
  cartItems$: Observable<Product[]> = this.cartItems.asObservable();

  constructor() {}

  addItem(item: Product): void {
    const currentItems = this.cartItems.value;
    this.cartItems.next([...currentItems, item]);
  }

  removeItem(item: Product): void {
    const currentItems = this.cartItems.value.filter(
      (cartItem) => cartItem.id !== item.id
    );
    this.cartItems.next(currentItems);
  }

  clearCart(): void {
    this.cartItems.next([]);
  }

  getTotalItems(): Observable<number> {
    return this.cartItems$.pipe(map((items: Product[]) => items.length));
  }
}
