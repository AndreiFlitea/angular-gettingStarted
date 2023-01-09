import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ProductInterface, productsArray } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  addToCart(product: ProductInterface) {
    this.cartService.addToCart(product);
    window.alert('Your Product has been added to the cart');
  }
  detailedProduct: ProductInterface | undefined; 

  constructor(
    private thisIsTheRoute: ActivatedRoute,
    private cartService: CartService
    ) {}

  ngOnInit() {
    const routeParam = this.thisIsTheRoute.snapshot.paramMap;
    const productIdFromRoute = Number(routeParam.get('productsArrayId')) 

    this.detailedProduct = productsArray.find(placeholderProduct => placeholderProduct.id === productIdFromRoute)

  }

}
