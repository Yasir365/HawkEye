import { HttpClient } from '@angular/common/http';
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
    return this.http.get<any>(`${this.baseUrl}/admin/contact-us/list?page=${params.page}&perPage=${params.perPage}&name=${params.name}&email=${params.email}`);
  }

  saveSubscribers(data: any) {
    return this.http.post(this.baseUrl + '/public/subscriber/add', data);
  }

  getSubscribers(params: any) {
    return this.http.get<any>(`${this.baseUrl}/admin/subscriber/list?page=${params.page}&perPage=${params.perPage}`);
  }

  getCount() {
    return this.http.get(this.baseUrl + '/admin/subscriber/count');
  }

  saveCallback(data: any) {
    return this.http.post(this.baseUrl + '/public/callback-number/add', data);
  }

  getCallback(params: any) {
    return this.http.get(this.baseUrl + '/admin/callback-number/list', { params: params });
  }
}
