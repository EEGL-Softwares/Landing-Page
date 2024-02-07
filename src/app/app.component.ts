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
    particlesJS.load('particles-js', '../assets/particles.json', function () {
      //done
    });
  }
}

declare var particlesJS: any;

