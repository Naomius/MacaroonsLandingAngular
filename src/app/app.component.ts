import { Component } from '@angular/core';
import {AdvantagesType} from "./types/advantages.type";
import {ProductsType} from "./types/products.type";
import {FormValuesType} from "./types/form-values.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showPresent = true;

  headerPhoneNumber = '+8 (894) 568-945-56';

  hrefInstagram = 'https://google.com'

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

  public products: ProductsType[] = [
    {
      title: 'Макарун с малиной',
      count: '1 шт.',
      price: '1,70 руб',
      image: 'red.png'
    },
    {
      title: 'Макарун с манго',
      count: '1 шт.',
      price: '1,70 руб',
      image: 'yellow.png'
    },
    {
      title: 'Пирог с ванилью',
      count: '1 шт.',
      price: '1,70 руб',
      image: 'white.png'
    },
    {
      title: 'Пирог с фисташками',
      count: '1 шт.',
      price: '1,70 руб',
      image: 'green.png'
    },
  ]


  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"});
  }

  public addToCart(product: ProductsType, target: HTMLElement): void {
    this.scrollTo(target);
    this.formValues.productTitle = product.title.toUpperCase()
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
