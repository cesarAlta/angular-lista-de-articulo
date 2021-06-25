import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HelloComponent } from './hello.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListaArticulosComponent } from './lista-articulos/lista-articulos.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    HelloComponent,
    InicioComponent,
    ListaArticulosComponent
  ],
  bootstrap: [InicioComponent]
})
export class AppModule {}
