import { Injectable } from '@angular/core';
// import { apiUrl } from '../config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  apiUrl = 'https://dummyjson.com/products';

  constructor(private http:HttpClient) {
   }

  getData(limit: number,
    skip: number){
    return this.http.get(`${this.apiUrl}?limit=${limit}&skip=${skip}`);
   }
   
  getDetails() {
    return this.http.get(`${this.apiUrl}`);
  }
}
