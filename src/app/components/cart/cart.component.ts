import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from '../../services/cart.service';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems$: Observable<Product[]> | undefined;
  totalItems$: Observable<number> | undefined;

  constructor(private readonly cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems$ = this.cartService.cartItems$;
    this.totalItems$ = this.cartService.getTotalItems();
  }

  removeItem(item: Product): void {
    this.cartService.removeItem(item);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }
}
