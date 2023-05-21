import {Component, OnInit} from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductsType} from "./types/products.type";
import {FormValuesType} from "./types/form-values.type";
import {ProductService} from "./services/product.service";
import {CartProductService} from "./services/cart-product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CartProductService, ProductService]
})
export class AppComponent implements OnInit{

  products: ProductsType[] = this.productService.getProducts();

  showPresent = true;

  headerPhoneNumber = '375293689868';

  hrefInstagram = 'https://google.com';


  constructor(public productService: ProductService,
              public cartProductServices: CartProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts()
  }


  public formValues: FormValuesType = {
    productTitle: '',
    name: '',
    phone: '',
  }

  public advantages: AdvantagesType[] = [
    {
      number: 1,
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      number: 2,
      title: 'Много вкусов',
      description: 'Наша задача – предоставить вам широкое разнообразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      number: 3,
      title: 'Бисквитное тесто',
      description: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      number: 4,
      title: 'Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ];


  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductsType, target: HTMLElement): void {
    this.cartProductServices.price++;
    this.cartProductServices.count++;
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase()
    alert(`${this.formValues.productTitle}, добавлен в корзину`)
  }

  public creatOrder() {
    if (!this.formValues.productTitle) {
      alert('Заполните поле Пицца')
      return;
    }
    if (!this.formValues.name) {
      alert('Заполните поле имя')
      return;
    }
    if (!this.formValues.phone) {
      alert('Введите номер телефона')
      return;
    }
    alert('Спасибо за заказ!');

    this.formValues = {
      productTitle: '',
      name: '',
      phone: '',
    }
  }

}
