import { Injectable } from '@angular/core';
import {ProductService} from "./product.service";

@Injectable()
export class CartProductService {
  count: number = 0;
  price: number = 0;
  constructor() { }
}
