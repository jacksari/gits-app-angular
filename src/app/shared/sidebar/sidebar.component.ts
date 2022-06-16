import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent{

  constructor(
    private gifsService: GifsService
  ) { }

  get historial() {
    return this.gifsService.getHistorial();
  }

  clickTitle(item: string) {
    this.gifsService.selectItem(item);
  }

}
