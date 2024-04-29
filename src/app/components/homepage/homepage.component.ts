import { Component } from '@angular/core';
import {Router, RouterOutlet } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../../services/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule, CurrencyPipe,NgxPaginationModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  products:any=[];

  page = 1;
  itemsPerPage = 10;
  perPageLimits = [10, 20, 30, 40, 50];
  currentPage = 1;
  totalItems: number = 50;

  constructor(private apiServices:ServiceService,private router:Router){}
  
  textinput = 'Manish';
  ngOnInit(){
    this.getProduct();
  }


  getProduct(){
    this.apiServices.getData(this.itemsPerPage, this.page).subscribe((data:any)=>{
      this.products = data?.products;
      console.log("data?.products", data);
      this.totalItems = data?.total;
    })
  }

  getData(id:number) {
    this.router.navigate(['/dashbord/product-details',id]);
  }

  gty(page: any) {
    this.products = [];
    this.totalItems = 0;
    this.apiServices.getData(this.itemsPerPage, page).subscribe((res: any) => {
      this.products = res.products;
      this.totalItems = res.total;
    });
  }

  public setPerPagelog(value: any) {
    this.itemsPerPage = value;
    this.page = 1;
    this.gty(this.page);
  }

}
