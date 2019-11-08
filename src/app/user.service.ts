import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly baseUrl = 'http://104.211.60.175/requestRide/public/api/login';
  headers = new HttpHeaders().set('Content-Type', 'application/json')
    .set('Accept', 'application/json')
    .set('responseType', 'text')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.baseUrl, JSON.stringify(data), { headers: this.headers });
  }


}
