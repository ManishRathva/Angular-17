import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ServiceService } from '../../services/service.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule,CurrencyPipe,RouterLink,RouterOutlet],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {

  productId:any;
  products?:any[];
  product:any;

  selectedImage: string | null = null;

  constructor(private activatedRoute: ActivatedRoute, private apiServices:ServiceService,private cartService:CartServicesService){}

  ngOnInit(){
    this.productId = this.activatedRoute.snapshot.paramMap.get("id");

    this.apiServices.getDetails().subscribe((data: any) => {
      this.products = data?.products;
      if (this.products && this.productId) {
        const products = this.products.filter(product => product.id == this.productId);
        products.forEach((data: any) => {
          this.product = data;
        })
      }
    
    });
  }
  selectImage(image: string) {
    this.product.thumbnail = image;
  }

  addtoCart(product:any){
    this.cartService.add(product);
  }

}
