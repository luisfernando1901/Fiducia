import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder } from '@angular/forms';
import {ConfirmationService, MessageService} from 'primeng/api';
import { AngularFireStorage, AngularFireStorageReference } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';
import { CatalogoService } from 'src/app/services/catalogo.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-admin-content',
  templateUrl: './admin-content.component.html',
  styleUrls: ['./admin-content.component.css']
})
export class AdminContentComponent implements OnInit {
  //Variables para la primera pestaña
  file:any;
  filePath:string;
  fileRef:AngularFireStorageReference;
  subscripcion1:Subscription;
  subscripcion2:Subscription;
  newItem = this.fb.group({
    nombre: ['', Validators.required],
    descripcion: ['', Validators.required],
    categoria: ['', Validators.required],
    precio: ['', Validators.required],
    rating: ['', Validators.required],
    url:['']
  });
  //Variables para la segunda pestaña
  listaEditables:object[] = [];

  constructor(private fireStore:AngularFirestore,
              private fb:FormBuilder,
              private messageService: MessageService,
              private storage: AngularFireStorage,
              private auth:AngularFireAuth,
              private router:Router,
              private catalogoService:CatalogoService,
              private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.subscripcion1 = this.catalogoService.obtenerItems().subscribe(params=>{
      console.log(params);
      this.listaEditables = params;
      this.subscripcion1.unsubscribe();
    });
  }

  //Aqui vienen las funciones para la pestaña de "Agregar Items"
  async agregar() {
    //Limpiamos los mensajes anteriores
    this.messageService.clear();
    let image_saved: boolean = false;
    //Mensaje de espera
    this.messageService.add({ severity: 'info', summary: 'Por favor espere...', detail: '', sticky: true });
    //Subimos la imagen (aqui debo ver como manejo los errores para agregar el message de que debe agregar imagen, OJO que el then solo va para promesas, ya que el catch implementado no lo detecta)
    await this.storage.upload(this.filePath, this.file).then(params => {
      console.log('Imagen subida');
      image_saved = true;
    });
    if (image_saved) {
      //Obtenemos la URL
      await this.fileRef.getDownloadURL().toPromise().then(params => {
        console.log(params);
        this.newItem.value['url'] = params;
      });
      //Añadimos el item a nuestra colección de tienda en firebase
      await this.fireStore.collection('tienda').doc('categorias').collection('items').add(this.newItem.value)
        .then(params => {
          this.messageService.clear();
          this.messageService.add({ severity: 'success', summary: `${this.newItem.value['nombre']} agregado!`, detail: 'Se agregó el nuevo item exitosamente!' });
          //Limpiamos los valores del forms
          this.newItem.reset();
        })
        .catch(err => {
          this.messageService.add({ severity: 'error', summary: 'Error', detail: 'No se pudo agregar el nuevo item, por favor intente de nuevo' });
        });

    }
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

  //Aqui vienen las funciones para la pestaña de "Editar Items"
  eliminar(item:string){
    this.confirmationService.confirm({
      message: `Estas seguro/a que deseas eliminar "${item}" ?`,
      accept: () => {
          //Actual logic to perform a confirmation
          this.subscripcion2 = this.catalogoService.obtenerDocId(item).subscribe( async params=>{
            let codigoDoc = params[0]['payload']['doc']['id'];
            this.subscripcion2.unsubscribe();
            await this.catalogoService.eliminarItem(codigoDoc)
            .then(then => this.messageService.add({severity:'success', summary:'Eliminado con éxito!'}))
            .catch(err => this.messageService.add({severity:'error', summary:'No se pudo eliminar'}));
          });
      }
  });
  }

  editar(){

  }
}
