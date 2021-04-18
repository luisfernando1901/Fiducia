import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  itemsFiltered:object[];
  todosLosItems:object[];
  seleccionado:any;

  categorias:string[]=[];
  boxFloral_array:object[];
  cajasPersonalizadas_array:object[];
  globos_array:object[];
  peluches_array:object[];
  ramos_array:object[];
  //Subscripciones
  subscripcion1:Subscription;
  subscripcion2:Subscription;
  subscripcion3:Subscription;
  subscripcion4:Subscription;
  subscripcion5:Subscription;
  constructor(private fireStore:AngularFirestore) {
    
    
  }

  ngOnInit():void{
    this.fireStore.collection('tienda').doc('categorias').valueChanges().subscribe(params=>{  
      let aux:string[] = ['todas las categorías'];
      //this.categorias = params['tienda']['categorias'];
      console.log('Imprimimos las categorías');
      this.categorias = aux.concat(params['tienda']['categorias']);
      console.log(this.categorias);
      this.buscarCatalogo();
    });
    
  }
  //Función que busca los items de todas las categorías del catálogo en firestore
  async buscarCatalogo() {
    let aux:object[] = [];
    this.subscripcion1= this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[1], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.boxFloral_array = params;
      this.subscripcion1.unsubscribe();

    });
    this.subscripcion2 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[2], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.cajasPersonalizadas_array = params;
      this.subscripcion2.unsubscribe();
    });
    this.subscripcion3 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[3], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.globos_array = params;
      this.subscripcion3.unsubscribe();
    });
    this.subscripcion4 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[4], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.peluches_array = params;
      this.subscripcion4.unsubscribe();
    });
    this.subscripcion5 = this.fireStore.collection('tienda').doc('categorias').collection(this.categorias[5], ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(params => {
      console.log(params);
      this.ramos_array = params;
      this.subscripcion5.unsubscribe();
    });
    const promise = new Promise((resolve,reject)=>{
      setTimeout(()=>{
          if(this.boxFloral_array != null && this.cajasPersonalizadas_array!=null && this.globos_array!=null && this.peluches_array!=null && this.ramos_array!=null){
            this.itemsFiltered = aux.concat(this.boxFloral_array,this.cajasPersonalizadas_array,this.globos_array,this.peluches_array,this.ramos_array);
            this.todosLosItems = Object.assign(this.itemsFiltered);
            console.log(this.todosLosItems);
            resolve('Catálogo completo');
          }
          else{
            reject('No se pudo cargar el catálogo');
          }
      },2000);
    });

    await promise.then(param=>console.log(param));
    
    
  }
  //La idea de la función cambio es consultar en la BD el array de objetos que pertenecen a dicha categoría 
  // y dicho array asignarlo al itemsFilteres del p-dataview
  cambio(){
    console.log(this.seleccionado);

    let seleccion:string = this.seleccionado;
    if (seleccion == 'todas las categorías') {
      console.log(this.itemsFiltered);
      this.itemsFiltered = this.todosLosItems;
    }
    if (seleccion == 'box floral') {
      console.log(this.itemsFiltered);
      this.itemsFiltered = this.boxFloral_array;
    }
    if (seleccion == 'cajas personalizadas') {
      this.itemsFiltered = this.cajasPersonalizadas_array;
    }
    if (seleccion == 'globos') {
      this.itemsFiltered = this.globos_array;
    }
    if (seleccion == 'peluches') {
      this.itemsFiltered = this.peluches_array;
    }
    if (seleccion == 'ramos') {
      this.itemsFiltered = this.ramos_array;
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