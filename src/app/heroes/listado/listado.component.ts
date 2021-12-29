import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent{

  heroes: string[] =['Spiderman', 'Ironman', 'Hulk', 'Thor', 'BlackWidow'];  
  HeroeBorrado:string='';
  borrado:boolean=false;
  BorrarHeroe(){
    console.log("Borrando...");
    this.HeroeBorrado=this.heroes.shift()||'';
    this.borrado=true;
  }
}
