import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { animate } from 'motion';

@Component({
  selector: 'app-pagina-inicial',
  standalone: true,
  imports: [],
  templateUrl: './pagina-inicial.component.html',
  styleUrl: './pagina-inicial.component.scss'
})
export class PaginaInicialComponent implements OnInit {
  @ViewChild('quadrado') quadrado: ElementRef;

  ngOnInit(): void {
    this.animacaoQuadrado();
  }

  animacaoQuadrado(): void {
    animate(
      this.quadrado.nativeElement,
      {rotate: 180},
      {duration: 0.5, easing: 'ease-in-out'}
    ).finished.then(() => {

    })
    .catch(() => {
      console.log('Erro ao animar elemento')
    })
  }
}
