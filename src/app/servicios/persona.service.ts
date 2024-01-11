import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  API_URI = '/api/v1/persona';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<any> {
    return this.http.get(`${this.API_URI}`);
  }
}
