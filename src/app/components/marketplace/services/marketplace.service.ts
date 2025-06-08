import { Injectable } from '@angular/core';
import { Categories, Product } from '../components/model/products.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarketplaceService {
private apiUrlProduct = 'https://api.escuelajs.co/api/v1/products';
private apiUrlCategories = 'https://api.escuelajs.co/api/v1/categories';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrlProduct);
  }

   getCategories(): Observable<Categories[]> {
    return this.http.get<Categories[]>(this.apiUrlCategories);
  }
}
