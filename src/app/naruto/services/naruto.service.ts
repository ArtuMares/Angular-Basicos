import { Injectable } from "@angular/core";
import { personaje } from '../interfaces/naruto.interface';

@Injectable()
export class narutoService {
    private _personajes: personaje[] = [
        {
            nombre: "Itachi",
            poder: 8000,
        },
        {
            nombre: "Minato",
            poder: 10000
        }
    ];

    get personajes(): personaje[] {
        return [...this._personajes];
    }

    constructor() {
        
    }

    agregarPersonaje(Personaje:personaje){
        this._personajes.push(Personaje);
    }
}