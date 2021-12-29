import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl :'heroe.component.html'
})

export class HeroeComponent{
    nombre  : string    ='IronMan';
    edad    : number    =45;
    
    get nombrecapitalizado():string{
        return this.nombre.toUpperCase();
    }


    ObtenerNombre():string{
        
        return `${this.nombre} - ${this.edad}`;
    }

    cambiarNombre():void{
        this.nombre='Spiderman';
    }

    cambiarEdad():void{
        this.edad= 28;
    }

}