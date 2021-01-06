import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }
  getData() {
    return this.http.get('/api/getData')
  }
  auth() {
    return this.http.post('/api/auth',  { title: 'Angular POST Request Example' })
  }
  home() {
    return this.http.get('/api/home')
  }

}
