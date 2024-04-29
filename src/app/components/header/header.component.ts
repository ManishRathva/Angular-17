import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CartServicesService } from '../../services/cart-services.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  count:any;

  constructor(private cartService:CartServicesService){
      
  }

  ngOnInit(){
    this.count = this.cartService.count();
    this.cartService.getCartUpdates().subscribe(length => {
      this.count = length; // Update count when it changes
    });
    console.log("this.count", this.count);  
  }

}
