import { Component, OnInit } from '@angular/core';
import { PersonajesInterface } from '../models/personajes-interface';
import { DataService } from '../services/data.service';
import { tap, map } from 'rxjs/operators';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent implements OnInit {

  seccion: string[] = ['Personajes', 'Estudiantes', 'Profesores'];
  personajes!: PersonajesInterface[];
  estudiantes!: PersonajesInterface[];
  profesores!: PersonajesInterface[];

  constructor(private dataService: DataService) { }
  background: ThemePalette = undefined;

  ngOnInit(): void {

    this.dataService.getCharacters('gryffindor').pipe(
      map((personajes: PersonajesInterface[]) => this.personajes = personajes)
    ).subscribe((data: any) => {
      console.log(data)
    });

    this.displayEstudiantes();
    this.displayProfesores();

  }

  seleccionarPersonajes(event: any): void {
    let valorSelect = event.value;

    this.dataService.getCharacters(valorSelect)
    .pipe(
        map((personajes: PersonajesInterface[]) => this.personajes = personajes)
    ).subscribe();
}

displayEstudiantes(): void {
  this.dataService.getEstudiantes()
  .pipe(
      tap((estudiantes: PersonajesInterface[]) => this.estudiantes = estudiantes)
  ).subscribe();
}

displayProfesores(): void {
  this.dataService.getProfesores()
  .pipe(
      tap((profesores: PersonajesInterface[]) => this.profesores = profesores)
  ).subscribe((data: any) => {
    console.log(data)
  });
}

}
