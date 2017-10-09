import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { ProductListComponent } from '../products/product-list.component';
import { ProductDetailsComponent } from '../products/product-details.component';
import { ProductGuardService } from '../products/product-guard.service';
import { ProductService } from './product.service';
import { SharedModule } from './../shared/shared.module';


@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'products', component: ProductListComponent},
      {path: 'products/:id',
        canActivate: [ProductGuardService],
        component: ProductDetailsComponent},
    ]),
    SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
  ],
    /* guards must be added to providers arrays of an module level */
  providers: [
    ProductService,
    ProductGuardService
  ]
})
export class ProductModule { }
