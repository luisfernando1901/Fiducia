import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import {MessageService} from 'primeng/api';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
  file:any;
  filePath:string;
  fileRef:AngularFireStorageReference;

  newItem = this.fb.group({
    nombre: [''],
    descripcion: [''],
    categoria: [''],
    precio: [''],
    rating: [''],
    url:['']
  });

  constructor(private fireStore:AngularFirestore,
              private fb:FormBuilder,
              private messageService: MessageService,
              private storage: AngularFireStorage,
              private auth:AngularFireAuth,
              private router:Router) { }

  ngOnInit(): void {
  }

  async agregar() {
    //Subimos primero la imagen y obtenemos el URL de la imagen guardada
    await this.storage.upload(this.filePath, this.file).then(params=>{
      console.log('Imagen subida');
    });
    //Obtenemos la URL
    await this.fileRef.getDownloadURL().toPromise().then(params=>{
      console.log(params);
      this.newItem.value['url'] = params;
    });
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

  uploadFile(event:any) {
    //Se obtiene el archivo
    this.file = event.target.files[0];
    //La ruta en el repositorio
    this.filePath = `items-images/${this.newItem.value['nombre']}`;
    //Referencia para luego obtener el URL
    this.fileRef = this.storage.ref(this.filePath);
  }

  async logout() {
    await this.auth.signOut();
    this.router.navigate(['fiduciaAdmin']);

  }
}
