import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Book } from '../../models/book';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  books: Book[] = [
    { id: 1, title: 'The Heart of Redness', author: 'Zakes Mda', price: 250 },
    { id: 2, title: 'Disgrace', author: 'J.M. Coetzee', price: 320 },
    { id: 3, title: 'Long Walk to Freedom', author: 'Nelson Mandela', price: 480 },
    { id: 4, title: 'Cry, the Beloved Country', author: 'Alan Paton', price: 210 },
    { id: 5, title: 'Born a Crime', author: 'Trevor Noah', price: 350 },
    { id: 6, title: 'Burger\'s Daughter', author: 'Nadine Gordimer', price: 290 }
  ];

  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController
  ) {}

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }

  removeFromCart(bookId: number): void {
    this.cartService.removeFromCart(bookId);
  }

  isInCart(bookId: number): boolean {
    return this.cartService.isInCart(bookId);
  }

  get cartCount(): number {
    return this.cartService.getCart().length;
  }
}
