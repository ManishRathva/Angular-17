import { Injectable } from '@angular/core';
// import { apiUrl } from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) {
   }

   getData(){
     return this.http.get('https://dummyjson.com/products');
   }
}
