import { Component, OnInit } from '@angular/core';
import { personaje } from '../interfaces/naruto.interface';
import { narutoService } from '../services/naruto.service';


  

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent { 

  //personajes: personaje[]=[];
  
  /*get personajes():personaje[]{
    return this.narutoService.personajes;
  }*/

  nuevo:personaje={
    nombre: "Jiraiya",
    poder: 9000,
  }
/*
  agregarNuevoPersonaje(argumento:personaje){
    this.personajes.push(argumento);
  }*/

  constructor(){ //inyeccion de dependencias
    //this.personajes=this.narutoService.personajes;
  }
}

