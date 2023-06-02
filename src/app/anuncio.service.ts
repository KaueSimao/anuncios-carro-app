import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Anuncio } from './anuncio.module';

@Injectable({
  providedIn: 'root'
})
export class AnuncioService {
  url = "http://localhost:4200";

  private anuncios: Anuncio[] = [];
  private anunciosSubject: BehaviorSubject<Anuncio[]> = new BehaviorSubject<Anuncio[]>(this.anuncios);

  constructor() { }

  getAnuncios(): Observable<Anuncio[]> {
    return this.anunciosSubject.asObservable();
  }

  addAnuncio(anuncio: Anuncio): void {
    this.anuncios.push(anuncio);
    this.anunciosSubject.next(this.anuncios);
  }

  updateAnuncio(anuncio: Anuncio): void {
    const index = this.anuncios.findIndex(a => a.id === anuncio.id);
    if (index !== -1) {
      this.anuncios[index] = anuncio;
      this.anunciosSubject.next(this.anuncios);
    }
  }

  deleteAnuncio(id: number): void {
    this.anuncios = this.anuncios.filter(a => a.id !== id);
    this.anunciosSubject.next(this.anuncios);
  }
}
