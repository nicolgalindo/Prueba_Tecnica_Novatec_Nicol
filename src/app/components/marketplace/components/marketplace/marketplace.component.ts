import { Component } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';
import { CartItem, Categories, Product } from '../model/products.model';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: []
})
export class MarketplaceComponent {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  categories: Categories[] = [];
  car: Product[] = [];

  market: { product: Product, quantity: number }[] = [];


  constructor(private marketplaceService: MarketplaceService) { }

  ngOnInit() {
    this.marketplaceService.getCategories().subscribe(data => {
      this.categories = data;
        console.log('categorias:', this.categories);
    });
  }

  searchProducts() {
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = [];
      return;
    }
    console.log('buscando productos:', this.searchTerm);
    this.marketplaceService.getProducts().subscribe(data => {
      this.filteredProducts = data.filter(p =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log('productos:', this.filteredProducts);
    });
  }

    searchCategory(categoryId: number) {
    this.marketplaceService.getProducts().subscribe(data => {
      this.filteredProducts = data.filter(p =>
        p.category && p.category.id === categoryId
      );
      console.log('productos por categoria:', this.filteredProducts);
    });
  }

  addToCart(product: Product) {
  const item = this.market.find(i => i.product.id === product.id);
  if (item) {
    item.quantity++;
    console.log('Producto al carrito:', item);
  } else {
    this.market.push({ product, quantity: 1 });
  }
}

removeFromCart(index: number) {
  if (this.market[index].quantity > 1) {
    this.market[index].quantity--;

  } else {
    this.market.splice(index, 1);
  }
}

download() {
  const headers = ['ID', 'Título', 'Cantidad', 'Precio Unitario', 'Precio Total'];
}


get cartCount(): number {
  return this.market.reduce((sum, item) => sum + item.quantity, 0);
}

get cartTotal(): number {
  return this.market.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
}

}

