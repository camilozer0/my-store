import { Component } from '@angular/core';

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

  onColumnsCountChange(colsNum: number): void {
    this.cols = colsNum;
    this.rowHeight = ROW_HEIGHTS[this.cols]
  }

  onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
