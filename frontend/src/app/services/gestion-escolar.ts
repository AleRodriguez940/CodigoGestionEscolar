import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GestionEscolarService {

  // Dirección de nuestro backend
  private apiUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  // Consultar alumnos y permitir búsqueda
  obtenerAlumnos(buscar: string = ''): Observable<any> {

    let params = new HttpParams();

    if (buscar.trim() !== '') {
      params = params.set('buscar', buscar);
    }

    return this.http.get<any>(
      `${this.apiUrl}/alumnos`,
      { params }
    );
  }

  // Consultar calificaciones
  obtenerCalificaciones(): Observable<any> {

    return this.http.get<any>(
      `${this.apiUrl}/calificaciones`
    );
  }
}
