import { Component, Input } from '@angular/core';
import { personaje } from '../interfaces/naruto.interface';
import { narutoService } from '../services/naruto.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})

export class PersonajesComponent{
//@Input("data") personajes:personaje[]=[]; 

get personajes(){
  return this.narutoService.personajes;
}
constructor(private narutoService:narutoService){


}
}
