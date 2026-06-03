import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Book } from '../../models/book';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss']
})
export class CartPage {
  constructor(
    private cartService: CartService,
    private alertCtrl: AlertController
  ) {}

  get cart(): Book[] {
    return this.cartService.getCart();
  }

  // TODO (Q1.4a - 9 marks):
  // Complete the three methods below.
  //
  // increaseQuantity(book): Increase the quantity of the given book by 1.
  //                         Use the cart service's updateQuantity method.
  //
  // decreaseQuantity(book): Decrease the quantity of the given book by 1.
  //                         Use the cart service's updateQuantity method.
  //
  // getTotal():             Return the total price of the cart, taking each
  //                         book's price AND quantity into account.

  increaseQuantity(book: Book) {

  }

  decreaseQuantity(book: Book) {

  }

  getTotal() {

  }

  removeFromCart(bookId: number): void {
    this.cartService.removeFromCart(bookId);
  }

  async checkout(): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: 'Checkout',
      message: 'Thank you for your purchase!',
      buttons: ['OK']
    });
    await alert.present();
    this.cartService.clearCart();
  }
}
