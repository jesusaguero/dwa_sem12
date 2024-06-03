import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactenosComponent } from './components/contactenos/contactenos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MarcasComponent } from './components/marcas/marcas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch:'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component:NosotrosComponent},
  {path: 'servicios', component:ServiciosComponent},
  {path: 'productos', component:ProductosComponent},
  {path: 'marcas', component:MarcasComponent},
  {path: 'contactenos', component:ContactenosComponent},
  {path: 'navbar', component:NavmenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }