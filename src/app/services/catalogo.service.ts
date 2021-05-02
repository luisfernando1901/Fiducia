import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  constructor(private fireStore: AngularFirestore) { }

  obtenerItems(){
    return this.fireStore.collection('tienda').doc('categorias').collection('items', ref => ref.where('nombre', '!=', false)).valueChanges()
  }

  obtenerDocId(nombre:string){
    return this.fireStore.collection('tienda').doc('categorias').collection('items', ref => ref.where('nombre', '==', nombre)).snapshotChanges()
  }

  eliminarItem(docId:string){
    return this.fireStore.collection('tienda').doc('categorias').collection('items').doc(docId).delete();
  }
}
