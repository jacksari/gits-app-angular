import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss'],
})
export class BusquedaComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('txtBusqueda') txtBusqueda!: ElementRef<HTMLInputElement>;

  buscar(e: string) {
    const valor = this.txtBusqueda.nativeElement.value;
    // console.log('buscar', e);
    if (valor != '') {
      this.gifsService.buscarGifs(valor);
    }

    this.txtBusqueda.nativeElement.value = '';
  }
}
