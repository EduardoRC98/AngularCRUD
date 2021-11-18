import { Routes } from "@angular/router";
import { FormComponent } from "./form/form.component";
import { PersonajesComponent } from "./personajes/personajes.component";
// import { SearchComponent } from "./components/search/search.component";
// import { PeliculaComponent } from "./components/pelicula/pelicula.component";

export const ROUTES: Routes = [
  { path: "home", component: PersonajesComponent },
  { path: 'form', component: FormComponent },
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "**", pathMatch: "full", redirectTo: "home" }
];
