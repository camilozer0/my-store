import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.models';
import { CartService } from 'src/app/services/cart.service';

const ROW_HEIGHTS: { [id: number]: number } = {
  1: 400,
  3: 335,
  4: 350
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  category: string | undefined;
  cols = 3;
  rowHeight = ROW_HEIGHTS[this.cols];

  constructor(private cartService: CartService) { }

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
      id: product.id

    })
  }


}
