import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

import { personaje } from '../interfaces/naruto.interface';
import { narutoService } from '../services/naruto.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{

  @Input("nuevo") nuevo:personaje={
    nombre: "",
    poder: 0,
  }
  //@Output() onNuevoPersonaje: EventEmitter<personaje> = new EventEmitter();

    constructor(private narutoService:narutoService){

    }
  Agregar(  ){
    if(this.nuevo.nombre.trim().length === 0){ return; }

    //this.onNuevoPersonaje.emit(this.nuevo); // Manda/emite el nuevo personaje
    this.narutoService.agregarPersonaje(this.nuevo);
    this.nuevo ={
      nombre: "",
      poder: 0
    };
    //agregar al arreglo de this.personajes y limpiar los inputs
  }

}
