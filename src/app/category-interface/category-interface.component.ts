import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CATEGORIES } from '../data/products';

@Component({
  selector: 'app-category-interface',
  standalone: true,
  templateUrl: './category-interface.component.html',
  styleUrls: ['./category-interface.component.css'],
  imports: [CommonModule],
})
export class CategoryInterfaceComponent {
  username: string = '';
  seatCount: number | string = 0;
  selectedSeats: number[] = [];

  categories = Object.keys(CATEGORIES);
  selectedCategory: string = '';
  products: any[] = [];
  cart: any[] = [];
  total: number = 0;

  categoryDisplayNames: Record<string, string> = {
    entradas: 'Entradas 🍽️',
    principales: 'Platos Principales 🥘',
    parrilla: 'Parrilla 🔥',
    pollo_brasa: 'Pollo a la Brasa 🍗',
    chaufa_wok: 'Chaufa y Wok 🍚🔥',
    extras: 'Extras y Acompañamientos 🍟',
    bebidas_frias: 'Bebidas Frías 🥤',
    bebidas_calientes: 'Bebidas Calientes ☕',
    postres: 'Postres 🍰',
  };

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.username = navigation.extras.state['username'];
      this.seatCount = navigation.extras.state['seatCount'];
      this.selectedSeats = navigation.extras.state['selectedSeats'];
    }
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.products = CATEGORIES[category as keyof typeof CATEGORIES];
  }

  addToCart(product: any) {
    this.cart.push(product);
    this.updateTotal();
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
    this.updateTotal();
  }

  updateTotal() {
    this.total = this.cart.reduce((acc, prod) => acc + prod.precio, 0);
  }
}
