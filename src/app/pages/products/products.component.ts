import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../interfaces/iproduct';
import { CheckBoxPipe } from '../../pipes/check-box-pipe';
import { HighlightDirective } from '../../directives/highlight.directive';
import { AppButtonDirective } from '../../directives/app-button.directive';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule,CurrencyPipe,CheckBoxPipe, HighlightDirective,AppButtonDirective],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productService = inject(ProductService);

  ProductList : IProduct[] = []; 

  removeProduct(productId: number)
  {
    console.log(productId);
    this.productService.delete(productId).subscribe(()=>
      {
        this.ngOnInit();
      }
    );
  }

  ngOnInit() {   
    this.productService.getAll().subscribe((data) => { 
      this.ProductList = data;
      console.log(this.ProductList);
    });
  }
}