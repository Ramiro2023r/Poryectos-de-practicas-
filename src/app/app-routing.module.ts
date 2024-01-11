import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarComponent } from './componentes/listar/listar.component';
import { GrabarComponent } from './componentes/grabar/grabar.component';

const routes: Routes = [

  {
    path: '',
    redirectTo: '/personas',
    pathMatch: 'full'
  },
  {
    path: 'personas',
    component: ListarComponent
  },
  {
    path: 'persona/agregar',
    component: GrabarComponent
  },
  {
    path: 'persona/editar/:id',
    component: GrabarComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
