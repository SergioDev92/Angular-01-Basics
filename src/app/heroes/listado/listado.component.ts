import { Component  } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','Ironman','Hilk','Thor']

  heroeBorrado: string = '';

  borrarHeroe(){
    // const heroeBorrado = this.heroes.shift();
    // console.log(heroeBorrado);
    
    //  con el or podemos decir si 
    // es undefine entonces ponemos string vacio
     this.heroeBorrado = this.heroes.shift() || '';
  }

}
