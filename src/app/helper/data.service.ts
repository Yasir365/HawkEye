import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  login(data: any) {
    return this.http.post(this.baseUrl + '/public/login', data);
  }

  changePassword(data: any) {
    return this.http.post(this.baseUrl + '/admin/profile/change-password', data);
  }

  saveContactUs(data: any) {
    return this.http.post(this.baseUrl + '/public/contact-us/add', data);
  }
  
  getContactUs(params: any) {
    let queryParams = new HttpParams();
    Object.keys(params).forEach(key => {
      queryParams = queryParams.append(key, params[key]);
    });
    return this.http.get<any>(`${this.baseUrl}/admin/contact-us/list`, { params: queryParams });
  }

  saveSubscribers(data: any) {
    return this.http.post(this.baseUrl + '/public/subscriber/add', data);
  }

  getSubscribers(params: any) {
    let queryParams = new HttpParams();
    Object.keys(params).forEach(key => {
      queryParams = queryParams.append(key, params[key]);
    });
    return this.http.get<any>(`${this.baseUrl}/admin/subscriber/list`, { params: queryParams });
  }

  getCount(){
    return this.http.get(this.baseUrl + '/admin/subscriber/count');
  }
}
