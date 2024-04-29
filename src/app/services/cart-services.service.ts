import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServicesService {
  private cartItems: any[] = [];
  private cartUpdates = new BehaviorSubject<number>(0);

  constructor() {
   
   }

  count(): number {
    return this.cartItems.length;
  }

  getCartItems(){
    return this.cartItems;
  }

  add(product: any) {
    this.cartItems.push(product);
    this.cartUpdates.next(this.cartItems.length);
  }

  getCartUpdates() {
    return this.cartUpdates.asObservable();
  }
  }

