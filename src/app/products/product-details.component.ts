import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

import{ IProduct } from './product'
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  ProdDetailsPageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private _productService : ProductService) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.getProduct(id);
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }

  onBack(): void{
  this._router.navigate(['/products']);

  }

}
