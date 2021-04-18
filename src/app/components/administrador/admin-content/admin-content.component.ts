import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import {MessageService} from 'primeng/api';

@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {

  newItem = this.fb.group({
    nombre: [''],
    descripcion: [''],
    categoria: [''],
    precio: [''],
    rating: ['']
  });

  constructor(private fireStore:AngularFirestore,
              private fb:FormBuilder,
              private messageService: MessageService) { }

  ngOnInit(): void {
  }

  async agregar() {
    //Añadimos el item a nuestra colección de tienda en firebase
    await this.fireStore.collection('tienda').doc('categorias').collection(this.newItem.value['categoria']).add(this.newItem.value)
      .then(params => {
        this.messageService.add({ severity: 'success', summary: `${this.newItem.value['nombre']} agregado!`, detail: 'Se agregó el nuevo item exitosamente!' });
        //Limpiamos los valores del forms
        this.newItem.reset();
      })
      .catch(err => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar el nuevo item, por favor intente de nuevo' });
      });
  }
}
