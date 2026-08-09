import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service';
import { ProductModel } from '../Models/product-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {
  products: ProductModel[] = [];
  constructor(private productService: ProductService, private router: Router){}
  ngOnInit(){
    this.loadProducts();
  }
  loadProducts(){
    this.productService.getProducts().subscribe(
      data => {
        this.products = data;
      },
      error => {
        console.error("Error fetching products:", error);
      }
    );
  }
  onClickUpdate(product: ProductModel): void{
    this.productService.updateProduct(product).subscribe(()=> {
      this.router.navigate(['/update', product.id]);
    })
  }
  onClickDelete(id: number): void{
    if(confirm('Are you sure you want to delete this product?')){
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          console.log("Product deleted");
          this.loadProducts();
        },
        error: (err) => {
          console.error('Error Deleting product:', err);
        }
      });
    }
    }
    addProduct(): void{
      this.router.navigate(['/add-product']);
    }

}
