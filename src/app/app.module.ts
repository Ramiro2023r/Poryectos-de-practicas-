import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './componentes/listar/listar.component';
import { NavegarComponent } from './componentes/navegar/navegar.component';
import { GrabarComponent } from './componentes/grabar/grabar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NavegarComponent,
    GrabarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
