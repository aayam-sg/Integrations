import { HttpClient } from '@angular/common/http';
import { Injectable, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../Models/product-model';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private apiUrl = 'http://127.0.0.1:8000/products';
    constructor(private http: HttpClient) {}

    getProducts(): Observable<ProductModel[]>{
        return this.http.get<ProductModel[]>(this.apiUrl);
    }

    getProduct(id: number): Observable<ProductModel> {
        return this.http.get<ProductModel>(`${this.apiUrl}/${id}`);
    }

    addProduct(product: ProductModel): Observable<ProductModel>{
        return this.http.post<ProductModel>(this.apiUrl, product);
    }

    updateProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.put<ProductModel>(`${this.apiUrl}/${product.id}`, product);
    }

    deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}
