import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProduct(){
    let products: Product[]

    products = [
      new Product(1, "Keyboard", 5000),
      new Product(2, "Moniter", 18000),
      new Product(3, "KeyMemory Card", 2000),
    ]
    return products;
  }
}
