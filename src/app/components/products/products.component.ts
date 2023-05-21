import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductsType} from "../../types/products.type";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products!: ProductsType;

  @Output() addToCartEvent: EventEmitter<ProductsType> = new EventEmitter<ProductsType>();

  addProductToCart() {
    this.addToCartEvent.emit(this.products);
  }

}
