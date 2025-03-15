import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { APIService } from '../Services/-api.service';
@Component({
  selector: 'app-product',
  standalone: false,
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [];
  errorMessage: string = '';

  constructor(
    private _products: APIService, private _active: ActivatedRoute
  ) { }
  ngOnInit() {
    this.get();
  }

  catagoryId: any
  productsData: any

  get() {
    this.catagoryId = this._active.snapshot.paramMap.get("id");
    this._products.getProductbyCategoryId().subscribe(data => {
      this.productsData = data.filter((f: any) => f.categoryId == this.catagoryId)
    })
  }
}
