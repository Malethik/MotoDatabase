import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moto } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getMoto(): Observable<Moto> {
    return this.http.get<Moto>(this.url);
  }
  addMoto(data: Moto): Observable<Moto> {
    return this.http.post<Moto>(this.url, data);
  }
  deleteMoto(model: string): Observable<Moto> {
    return this.http.delete<Moto>(`${this.url}` + `?model=` + `${model}`);
  }
}
