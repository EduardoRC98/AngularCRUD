import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgregarRequest, PersonajesInterface } from '../models/personajes-interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiURL: string = 'http://hp-api.herokuapp.com/api/characters';

  constructor(private _http: HttpClient,
  ) { }


  getCharacters(casa: string): any {
    return this._http.get<PersonajesInterface[]>(`${this.apiURL}/house/${casa}`);
  }

  getEstudiantes(): Observable<PersonajesInterface[]> {
    return this._http.get<PersonajesInterface[]>(`${this.apiURL}/students`);
  }

  getProfesores(): Observable<PersonajesInterface[]> {
    return this._http.get<PersonajesInterface[]>(`${this.apiURL}/staff`);
  }

  apply(values: AgregarRequest): void {
    if (localStorage.getItem('request')) {
        let request = JSON.parse(localStorage.getItem('request')!);
        request.push(values);
        localStorage.setItem('request', JSON.stringify(request));
    } else {
        localStorage.setItem('request', JSON.stringify([values]));
    }
}

getLocalStorage(): AgregarRequest[] {
    return JSON.parse(localStorage.getItem('request')!);
}

}
