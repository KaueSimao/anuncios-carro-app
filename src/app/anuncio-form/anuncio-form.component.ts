import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnuncioService } from '../anuncio.service';
import { Anuncio } from '../anuncio.module';

@Component({
  selector: 'app-anuncio-form',
  templateUrl: './anuncio-form.component.html',
  styleUrls: ['./anuncio-form.component.css']
})
export class AnuncioFormComponent implements OnInit {
  anuncio: Anuncio = {
    id: 0,
    titulo: '',
    descricao: '',
    preco: 0,
    dataValidade: '',
    imagem: '',
    status: 'ativo'
  };

  constructor(private router: Router, private route: ActivatedRoute, private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? +idParam : 0;

        if (id) {
      this.anuncioService.getAnuncios().subscribe(anuncios => {
        const anuncio = anuncios.find(a => a.id === id);
        if (anuncio) {
          this.anuncio = { ...anuncio };
        } else {
          this.router.navigate(['/admin']);
        }
      });
    }
  }

  salvarAnuncio(): void {
    if (this.anuncio.id) {
      this.anuncioService.updateAnuncio(this.anuncio);
    } else {
      this.anuncio.id = new Date().getTime();
      this.anuncioService.addAnuncio(this.anuncio);
    }
    this.router.navigate(['/admin']);
  }
}
