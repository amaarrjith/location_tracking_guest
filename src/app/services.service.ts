import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Form } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private baseUrl = 'http://127.0.0.1:8000/api/'
  constructor(private http:HttpClient) { }

  locationDetails(locationForm:FormData){
    return this.http.post(`${this.baseUrl}location`,locationForm)
  }
  getLocation() {
    return this.http.get('http://ip-api.com/json');
  }
}
