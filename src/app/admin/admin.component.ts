import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio.module';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  anuncios: Anuncio[] = [];

  constructor(private router: Router, private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.anuncioService.getAnuncios().subscribe(anuncios => {
      this.anuncios = anuncios;
    });
  }

  cadastrarAnuncio(): void {
    this.router.navigate(['/admin/anuncio']);
  }

  editarAnuncio(id: number): void {
    this.router.navigate(['/admin/anuncio', id]);
  }

  excluirAnuncio(id: number): void {
    this.anuncioService.deleteAnuncio(id);
  }
}
