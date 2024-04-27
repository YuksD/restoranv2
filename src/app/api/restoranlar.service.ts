import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestoranlarService {

  private apiEndpoint = 'https://smarty.kerzz.com:4004/api/mock/getFeed';
  private apiKey = 'bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2';

  constructor(private httpClient: HttpClient) { }

  postRestoran(latitude: number, longitude: number, skip: number, limit: number): Observable<any> {
    const params = {
      skip: skip,
      limit: limit,
      latitude: latitude,
      longitude: longitude
    };

    const headers = new HttpHeaders().set('apiKey', this.apiKey);

    return this.httpClient.post(this.apiEndpoint, params, { headers: headers });
  }
}
