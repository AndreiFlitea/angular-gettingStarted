import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductInterface } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  storedItems: ProductInterface[] = [];
  constructor(private http: HttpClient) { }

  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }

  addToCart(product: ProductInterface) {
    this.storedItems.push(product);
  }

  getItems() {
    return this.storedItems;
  }

  clearCart() {
    this.storedItems = [];
    return this.storedItems;
  }  
}
