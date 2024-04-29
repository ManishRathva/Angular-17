import { Component } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule,CurrencyPipe],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  products:any=[];

  constructor(private apiServices:ServiceService,private router:Router){}
  
  textinput = 'Manish';
  ngOnInit(){
    this.getProduct();
  }


  getProduct(){
    this.apiServices.getData().subscribe((data:any)=>{
      this.products = data?.products;
    })
  }

  getData(id:number) {
    this.router.navigate(['/dashbord/product-details',id])
  }

}
