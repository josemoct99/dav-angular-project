import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root' // 🔹 Disponible globalmente en los microfrontends
})
export class UserService {
  private apiUrl = 'http://localhost:3000/users'; // 🔹 URL del backend NestJS

  constructor(private http: HttpClient) {}

  // 🔹 Obtener todos los usuarios
  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
