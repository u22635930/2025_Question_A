import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Book[] = [];

  constructor() {}

  getCart(): Book[] {
    return this.cart;
  }

  // TODO (Q1.3a - 4 marks):
  // Modify this method to handle quantities.
  // Currently it adds the book as a new entry every time.
  // Update it so that:
  // - If the book is NOT already in the cart, add it with quantity = 1.
  // - If the book IS already in the cart, increment its quantity by 1
  //   instead of adding a duplicate entry.
  addToCart(book: Book) {
    this.cart.push({ ...book });
  }

  removeFromCart(bookId: number) {
    this.cart = this.cart.filter(b => b.id !== bookId);
  }

  // TODO (Q1.3b - 4 marks):
  // Complete this method so that it updates the quantity of the book in
  // the cart whose id matches bookId. If the resulting quantity drops
  // below 1, the book should be removed from the cart entirely.
  updateQuantity(bookId: number, quantity: number): void {

  }

  isInCart(bookId: number): boolean {
    return this.cart.some(b => b.id === bookId);
  }

  clearCart(): void {
    this.cart = [];
  }
}
