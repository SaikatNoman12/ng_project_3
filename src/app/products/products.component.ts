import { ProductsItem } from './../appModal/productsModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsItem: ProductsItem
  ) { }

  products:any;

  ngOnInit(): void {
    this.products = this.productsItem.products;
  }

}
