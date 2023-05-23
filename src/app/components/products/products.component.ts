import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsType} from "../../types/products.type";

@Component({
  selector: 'product',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() product!: ProductsType;

  @Output() addToCartEvent: EventEmitter<ProductsType> = new EventEmitter<ProductsType>();

  addProductToCart() {
    this.addToCartEvent.emit(this.product);
  }

}
