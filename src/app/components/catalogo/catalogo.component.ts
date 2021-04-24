import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  itemsFiltered: object[] = [];
  todosLosItems: object[] = [];
  seleccionado: any;

  categorias: string[] = [];
  boxFloral_array: object[];
  cajasPersonalizadas_array: object[];
  globos_array: object[];
  peluches_array: object[];
  ramos_array: object[];
  //Subscripciones
  subscripcion1: Subscription;
  subscripcion2: Subscription;
  subscripcion3: Subscription;
  subscripcion4: Subscription;
  subscripcion5: Subscription;
  constructor(private fireStore: AngularFirestore) {


  }

  ngOnInit(): void {
    //Buscamos las categorías disponibles para el dropdown
    this.fireStore.collection('tienda').doc('categorias').valueChanges().subscribe(params => {
      let aux: string[] = ['todas las categorías'];
      //this.categorias = params['tienda']['categorias'];
      console.log('Imprimimos las categorías');
      this.categorias = aux.concat(params['tienda']['categorias']);
      console.log(this.categorias);
      this.buscarCatalogo();
    });

  }

  //Función que busca los items de todas las categorías del catálogo en firestore
  buscarCatalogo() {
    this.subscripcion1 = this.fireStore.collection('tienda').doc('categorias').collection('items', ref => ref.where('nombre', '!=', false)).valueChanges().subscribe(
      params => {
        console.log(params);
        this.todosLosItems = params;
        this.itemsFiltered = params;
        this.subscripcion1.unsubscribe();
      }
    );
  }

  //La idea de la función cambio es consultar en la BD el array de objetos que pertenecen a dicha categoría 
  // y dicho array asignarlo al itemsFilteres del p-dataview
  cambio() {
    console.log(this.seleccionado);
    let seleccion: string = this.seleccionado;

    if (seleccion == 'todas las categorías') {
      this.itemsFiltered = this.todosLosItems;
    }
    if (seleccion == 'box floral') {
      this.itemsFiltered = this.todosLosItems.filter(function (item) {
        return item['categoria'] == 'box floral';
      });
    }
    if (seleccion == 'cajas personalizadas') {
      this.itemsFiltered = this.todosLosItems.filter(function (item) {
        return item['categoria'] == 'cajas personalizadas';
      });
    }
    if (seleccion == 'globos') {
      this.itemsFiltered = this.todosLosItems.filter(function (item) {
        return item['categoria'] == 'globos';
      });
    }
    if (seleccion == 'peluches') {
      this.itemsFiltered = this.todosLosItems.filter(function (item) {
        return item['categoria'] == 'peluches';
      });
    }
    if (seleccion == 'ramos') {
      this.itemsFiltered = this.todosLosItems.filter(function (item) {
        return item['categoria'] == 'ramos';
      });
    }
  }
}