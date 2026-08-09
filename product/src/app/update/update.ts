import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../Models/product-model';
import { ProductService } from '../services/product-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.html',
  styleUrl: './update.css',
})
export class Update implements OnInit{
  product: ProductModel = {
    id: 0, name: '', category: '', price: 0, quantity:0
  };
  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe({
      next: (data) => {
        this.product = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  updateProduct(): void {
    this.productService.updateProduct(this.product).subscribe({
      next: () => {
        alert('Product Updated Successfully');
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
