import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Articulo } from '../models/Articulo';
import { Articulos } from '../models/Articulo-Collection';

@Component({
  selector: 'app-lista-articulos',
  templateUrl: './lista-articulos.component.html',
  styleUrls: ['./lista-articulos.component.css']
})
export class ListaArticulosComponent implements OnInit {
  titulo: string = 'Lista de Articulos';
  alturaImagen: number = 100;
  margenImagen: number = 2;
  mostrarImagen: boolean = true;
  textoFiltro: string;

  Lista: Articulo[] = Articulos;

  ocultarMostrarImagen(): void {
    this.mostrarImagen = !this.mostrarImagen;
  }
  filtrar(): void {
    this.Lista = [];
    Articulos.forEach(art => {
      if (
        art.descripcion.toUpperCase().indexOf(this.textoFiltro.toUpperCase()) >=
        0
      ) {
        this.Lista.push(art);
      }
    });
  }
  constructor() {}

  ngOnInit() {}
}
