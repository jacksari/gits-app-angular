import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild('txtBusqueda') txtBusqueda!: ElementRef<HTMLInputElement>;

  buscar(e: string) {
    const valor = this.txtBusqueda.nativeElement.value;
    console.log('buscar', e);

    this.txtBusqueda.nativeElement.value = '';
  }

}
