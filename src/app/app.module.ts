import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from './routes';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { GlobosComponent } from './components/globos/globos.component';
import { BoxSorpresaComponent } from './components/box-sorpresa/box-sorpresa.component';
import { BoxFloralComponent } from './components/box-floral/box-floral.component';
import { BoxGlobosComponent } from './components/box-globos/box-globos.component';
import { BoxFloresComponent } from './components/box-flores/box-flores.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NovedadesComponent } from './components/novedades/novedades.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { RouterModule } from '@angular/router';
//Módulos de PrimeNg
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import { AdminPageComponent } from './components/administrador/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    CategoriesComponent,
    FooterComponent,
    GlobosComponent,
    BoxSorpresaComponent,
    BoxFloralComponent,
    BoxGlobosComponent,
    BoxFloresComponent,
    InicioComponent,
    NovedadesComponent,
    ContactoComponent,
    CatalogoComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    routing,
    BrowserAnimationsModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    InputTextModule,
    DropdownModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
