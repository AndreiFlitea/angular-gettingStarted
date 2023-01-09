import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems = this.cartService.getItems();

  checkoutForm = this.formBuilder.group({
    name:'',
    address:''
  });

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder   //by injecting cartService into the component, the component has access
  ) {}                               //to the methods and properties of the service such as 'getItems'   

    onSubmit(): void {
      //Process checkout data here
      this.cartItems = this.cartService.clearCart();
      console.warn('Your order has been submitted', this.checkoutForm.value);
      this.checkoutForm.reset();
    }

}
