import { RouterModule, Routes } from '@angular/router';
import { AdminContentComponent } from './components/administrador/admin-content/admin-content.component';
import { AdminPageComponent } from './components/administrador/admin-page/admin-page.component';
import { BoxFloralComponent } from './components/box-floral/box-floral.component';
import { BoxFloresComponent } from './components/box-flores/box-flores.component';
import { BoxGlobosComponent } from './components/box-globos/box-globos.component';
import { BoxSorpresaComponent } from './components/box-sorpresa/box-sorpresa.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { NovedadesComponent } from './components/novedades/novedades.component';

const appRoutes = [
    { path: '', component: InicioComponent,  pathMatch: 'full'},
    { path: 'Novedades', component: NovedadesComponent,  pathMatch: 'full'},
    { path: 'Detalles/BoxSorpresa', component: BoxSorpresaComponent,  pathMatch: 'full'},
    { path: 'Detalles/BoxFloral', component: BoxFloralComponent,  pathMatch: 'full'},
    { path: 'Detalles/Globos', component: BoxGlobosComponent,  pathMatch: 'full'},
    { path: 'Detalles/Flores', component: BoxFloresComponent,  pathMatch: 'full'},
    { path: 'Contacto', component: ContactoComponent,  pathMatch: 'full'},
    { path: 'fiduciaAdmin', component: AdminPageComponent,  pathMatch: 'full'},
    { path: 'fiduciaAdmin/content', component: AdminContentComponent,  pathMatch: 'full'},

];

export const routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });