
interface WandInterface {
  wood: string;
  core: string;
  length: string;
}

export interface PersonajesInterface {
  name: string;
  alternate_names: Array<string>;
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: WandInterface;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternate_actors: Array<string>;
  alive: boolean;
  image: string;
}

export interface AgregarRequest {
  nombre: string;
  apellido: string;
  correo: string;
  casa: string;
}
