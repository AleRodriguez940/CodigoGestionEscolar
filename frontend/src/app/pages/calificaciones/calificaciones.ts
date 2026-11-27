import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GestionEscolarService } from '../../services/gestion-escolar';

@Component({
  selector: 'app-calificaciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calificaciones.html',
  styleUrl: './calificaciones.css'
})
export class Calificaciones implements OnInit {

  calificaciones: any[] = [];
  cargando: boolean = false;
  mensajeError: string = '';

  constructor(
    private servicio: GestionEscolarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.consultarCalificaciones();
  }

  consultarCalificaciones(): void {
    this.cargando = true;
    this.mensajeError = '';

    this.servicio.obtenerCalificaciones().subscribe({

      next: (respuesta) => {
        console.log('Calificaciones recibidas:', respuesta);

        this.calificaciones = respuesta.calificaciones;
        this.cargando = false;

        this.cdr.markForCheck();
      },

      error: (error) => {
        console.error('Error al consultar calificaciones:', error);

        this.mensajeError = 'No fue posible cargar las calificaciones.';
        this.cargando = false;

        this.cdr.markForCheck();
      }

    });
  }
}
