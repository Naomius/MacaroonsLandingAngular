import {Injectable} from '@angular/core';
import {ProductsType} from "../types/products.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): ProductsType[] {
    return [
      {
        title: 'Макарун с малиной',
        count: 1,
        price: 1.70,
        image: 'red.png'
      },
      {
        title: 'Макарун с манго',
        count: 1,
        price: 1.70,
        image: 'yellow.png'
      },
      {
        title: 'Пирог с ванилью',
        count: 1,
        price: 1.70,
        image: 'white.png'
      },
      {
        title: 'Пирог с фисташками',
        count: 1,
        price: 1.70,
        image: 'green.png'
      },
    ]
  }


}

