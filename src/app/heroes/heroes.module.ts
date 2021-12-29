import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[  //Componentes de este módulo
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //Lo que se va a usar fuera del módulo
        ListadoComponent
    ],
    imports:[ //Módulos que se importan
        CommonModule
    ]
})
export class heroesModule{}