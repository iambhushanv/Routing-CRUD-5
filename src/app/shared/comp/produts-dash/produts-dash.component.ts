import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/products';

@Component({
  selector: 'app-produts-dash',
  templateUrl: './produts-dash.component.html',
  styleUrls: ['./produts-dash.component.scss']
})
export class ProdutsDashComponent implements OnInit {
  getProductsArr !: Array<Iproduct>

  constructor(
    private _productService: ProductsService

  ) { }

  ngOnInit(): void {
    this.fetchProduct()

  }

    fetchProduct() {
    this._productService.fetchProducts()
      .subscribe({
        next: res => {
          this.getProductsArr = res
        },
        error: err => {
          console.log(err);
        }
      })
  }

  trackByFun(index: number, product: Iproduct){
    return product.pid
  }

}
