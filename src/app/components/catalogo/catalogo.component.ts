import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  items: Item[] = [
    {
      nombre:'Flores',
      descripcion:'Aqui va la descripción del producto.',
      categoria:'box floral',
      precio:55,
      rating:4
    },
    {
      nombre:'Peluche',
      descripcion:'Aqui va la descripción del producto.',
      categoria:'peluche',
      precio:55,
      rating:4
    },
    {
      nombre:'Cono',
      descripcion:'Aqui va la descripción del producto.',
      categoria:'cono',
      precio:55,
      rating:4
    },
    {
      nombre:'Arreglo',
      descripcion:'Aqui va la descripción del producto.',
      categoria:'arreglo',
      precio:55,
      rating:4
    }
  ];
  itemsFiltered: Item[] = Object.assign(this.items);
  seleccionado:any;
  constructor() { }

  ngOnInit(): void {
  }
  //La idea de la función cambio es consultar en la BD el array de objetos que pertenecen a dicha categoría 
  // y dicho array asignarlo al itemsFilteres del p-dataview
  cambio(){
    console.log(this.seleccionado.categoria);
    let seleccion:string = this.seleccionado.categoria;
    if (seleccion == 'peluche') {
      this.itemsFiltered =[
        {
          nombre:'Flores',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'box floral',
          precio:55,
          rating:4
        },
        {
          nombre:'Peluche',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'peluche',
          precio:55,
          rating:4
        },
        {
          nombre:'Cono',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'cono',
          precio:55,
          rating:4
        },
        {
          nombre:'Arreglo',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'arreglo',
          precio:55,
          rating:4
        }
      ];
    }
    else {
      this.itemsFiltered = [
        {
          nombre:'Flores',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'box floral',
          precio:55,
          rating:4
        },
        {
          nombre:'Peluche',
          descripcion:'Aqui va la descripción del producto.',
          categoria:'peluche',
          precio:55,
          rating:4
        }
      ];
    }
    
  }

}

//Interfaces
interface Item {
  nombre:string;
  descripcion:string;
  categoria:string;
  precio:number;
  rating:number
}