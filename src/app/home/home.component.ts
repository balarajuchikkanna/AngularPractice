import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {

  // 15-05-2024
  products: Product[]
  productService;

  constructor(private router: Router){
    this.productService = new ProductService
  }
  // -----------------

  @Input() name: String | any; // or @Input() name = "String";

  // 09-05-2024
  @Output() childData = new EventEmitter

  triggerEvent(){
    this.childData.emit("Welcome to Angular class")
  }

  getprod(){
    this.products = this.productService.getProduct()
    console.log(this.products);
  }
}
