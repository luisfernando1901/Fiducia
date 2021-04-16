import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';


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

  categorias:string[]=[];
  subscripcion1:Subscription;
  subscripcion2:Subscription;
  subscripcion3:Subscription;
  subscripcion4:Subscription;
  subscripcion5:Subscription;
  constructor(private fireStore:AngularFirestore) {
    
  }

  ngOnInit():void{
    this.fireStore.collection('tienda').doc('categorias').valueChanges().subscribe(params=>{
      this.categorias = params['tienda']['categorias'];
      console.log(this.categorias);
      this.buscarCatalogo();
    });
    
  }
  //Función que busca los items de todas las categorías del catálogo en firestore
  buscarCatalogo() {
    this.subscripcion1= this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[0], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.subscripcion1.unsubscribe();
    });
    this.subscripcion2 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[1], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.subscripcion2.unsubscribe();
    });
    this.subscripcion3 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[2], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.subscripcion3.unsubscribe();
    });
    this.subscripcion4 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[3], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.subscripcion4.unsubscribe();
    });
    this.subscripcion5 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[4], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.subscripcion5.unsubscribe();
    });

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