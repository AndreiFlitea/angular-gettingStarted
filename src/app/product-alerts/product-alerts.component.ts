import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ProductInterface} from '../products'

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() inputProduct: ProductInterface | undefined;
  @Output() outputNotify = new EventEmitter();
}
