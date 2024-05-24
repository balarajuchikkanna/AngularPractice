import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

  products: Product[]
  productService;

  constructor(private router: Router){
    this.productService = new ProductService
  }
  // ----------------

  getprod(){
    this.products = this.productService.getProduct()
    console.log(this.products);
  }
}
