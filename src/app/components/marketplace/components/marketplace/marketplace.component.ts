import { Component } from '@angular/core';
import { MarketplaceService } from '../../services/marketplace.service';
import { Product } from '../model/products.model';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
    styleUrls: []
})
export class MarketplaceComponent {
   products: Product[] = [];
    filteredProducts: Product[] = [];
  searchTerm: string = '';
  carouselIndex: number = 0;
  

  constructor(private marketplaceService: MarketplaceService) {}

  searchProducts() {
    this.carouselIndex = 0;
    if (this.searchTerm.trim() === '') {
      this.filteredProducts = [];
      return;
    }
    this.marketplaceService.getProducts().subscribe(data => {
      this.filteredProducts = data.filter(p =>
        p.title.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
      console.log('productos:',this.filteredProducts);
    });
  }
  }

