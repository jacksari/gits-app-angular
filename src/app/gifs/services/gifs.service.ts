import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _historial: string[] = [];
  private apiKey: string = 'yUR33u9oc8YHvwFTFkBq5vdk5wa2gH5N';
  private url: string = `https://api.giphy.com/v1/gifs/search`;

  public resultados: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this._historial[0] && this.selectItem(this._historial[0]);
  }

  getHistorial() {
    return [...this._historial];
  }

  buscarGifs(query: string) {
    if (!this._historial.includes(query.trim().toLocaleLowerCase())) {
      this._historial = this._historial.slice(0, 10);
      this._historial.unshift(query);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }
    this.selectItem(query);
  }

  selectItem(query: string) {
    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('q', query)
      .set('limit', '12');
    this.http
      .get<SearchGifsResponse>(`${this.url}`, { params })
      .subscribe(({ data }) => {
        this.resultados = data;
      });
  }
}
