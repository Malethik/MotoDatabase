import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  url = 'https://api.api-ninjas.com/v1/motorcycles?model=ninja';
  apikey = '4LrnB7Khj4y3uAyjSuMA1Qz56fnKMjqkdhOki70d';
  constructor() {}
}
