import { Component, OnInit } from '@angular/core';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.anuncioService.getAnuncios().subscribe(anuncios => {
      this.anuncios = anuncios.filter(a => a.status === 'ativo');
    });
  }
}
