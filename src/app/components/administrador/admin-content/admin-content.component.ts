import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  constructor(private fireStore:AngularFirestore) { }

  ngOnInit(): void {
  }

  agregar(nombre:string, descripcion:string, categoria:string, precio:number, rating:number){
    console.log(nombre,descripcion,categoria,precio,rating);
    console.log(categoria.toLowerCase());
    let newItem = {
      nombre: nombre,
      descripcion: descripcion,
      categoria: categoria.toLowerCase(),
      precio: precio,
      rating: rating
    };
    this.fireStore.collection('tienda').doc('categorias').collection(categoria.toLowerCase()).add(newItem);

  }
}
