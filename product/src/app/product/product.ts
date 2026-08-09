import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product-service';
import { ProductModel } from '../Models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product {
  product !: FormGroup;
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router){
    this.product = this.fb.group({
      id: [''],
      name: [''],
      category: [''],
      price: [''],
      quantity: [''],
    });
  }

  onSubmit(){
    if(this.product.valid){
      const newProduct: ProductModel = this.product.value;
      this.productService.addProduct(newProduct).subscribe(
        response => {
          console.log('Product added: ', response);
          this.product.reset();
          this.router.navigate(['/products']);
        },
        error => {
          console.error("Error Adding Product: ", error);
        }
      )
    }
  }
}
