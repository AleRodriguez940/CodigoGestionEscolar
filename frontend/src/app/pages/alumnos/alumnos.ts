
import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GestionEscolarService } from '../../services/gestion-escolar';

@Component({
  selector: 'app-alumnos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumnos.html',
  styleUrl: './alumnos.css'
})
export class Alumnos implements OnInit {

  alumnos: any[] = [];
  buscar: string = '';
  cargando: boolean = false;
  mensajeError: string = '';

  constructor(
    private servicio: GestionEscolarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.consultarAlumnos();
  }

  consultarAlumnos(): void {
    this.cargando = true;
    this.mensajeError = '';

    this.servicio.obtenerAlumnos(this.buscar).subscribe({

      next: (respuesta) => {
        console.log('Respuesta recibida:', respuesta);

        this.alumnos = respuesta.alumnos;
        this.cargando = false;

        console.log('Estado de cargando:', this.cargando);
        console.log('Alumnos guardados:', this.alumnos);

        this.cdr.markForCheck();
      },

      error: (error) => {
        console.error('Error al consultar:', error);

        this.mensajeError = 'No fue posible cargar los alumnos.';
        this.cargando = false;

        this.cdr.markForCheck();
      }

    });
  }
}
