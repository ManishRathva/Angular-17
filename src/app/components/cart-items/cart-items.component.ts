import { Component } from '@angular/core';
import { CartServicesService } from '../../services/cart-services.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.scss'
})
export class CartItemsComponent {

  product:any[]=[];
  totalprice?:number;

  constructor(private cartService:CartServicesService){}

  ngOnInit(){
    this.product=  this.cartService.getCartItems();
    console.log("product", this.product.length);
    
    const totalPriceSum = this.product.reduce((total, product) => {
      return total + (product.price || 0); 
    }, 0);
    this.totalprice = totalPriceSum;
  }

}
