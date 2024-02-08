import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent implements OnInit {
  title = 'particle-test';
  ngOnInit(): void {
<<<<<<< HEAD
    particlesJS.load('particles-js', '../assets/particles.json', {
      
=======
    particlesJS.load('particles-js', '../assets/particles.json', function () {
      //done
>>>>>>> 2b1e6988abcbaf58144f1b73660c101fbe8f4916
    });
  }
}

declare var particlesJS: any;

