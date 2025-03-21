import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private apiUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/categories';
  private productApiUrl = 'https://67cd64b6dd7651e464ee3d63.mockapi.io/products';
  constructor(private http: HttpClient) { }
  // Get all items
  getAllItems(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
  getProductbyCategoryId() {
    return this.http.get<any>("https://67cd64b6dd7651e464ee3d63.mockapi.io/products")
  }
}
