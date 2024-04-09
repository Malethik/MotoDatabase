import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Moto } from '../model/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  url = 'http://localhost:3000/moto';

  constructor(private http: HttpClient) {}

  getMoto(): Observable<Moto[]> {
    return this.http.get<Moto[]>(`${this.url}`) as Observable<Moto[]>;
  }

  addMoto(moto: Moto): Observable<Moto> {
    const { ...motos } = moto;
    const data: Moto = { ...motos };
    return this.http.post<Moto>(this.url, data) as Observable<Moto>;
  }
  deleteMoto(model: string): Observable<Moto> {
    return this.http.delete<Moto>(
      `${this.url}` + `?model=` + `${model}`
    ) as Observable<Moto>;
  }
}
