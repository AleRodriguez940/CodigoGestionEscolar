
import { Component } from '@angular/core';
import { Alumnos } from './pages/alumnos/alumnos';
import { Calificaciones } from './pages/calificaciones/calificaciones';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Alumnos, Calificaciones],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  titulo = 'Sistema de Gestión Escolar';
}
