import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  template: `
  <div class="watermark">
  <p>Under Development</p>
  </div>
  <router-outlet></router-outlet> 
  `,
  styles: [
    `
    .watermark {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0.4;
    z-index: 1000;
  }

  .watermark p {
    font-size: 3rem;
    font-weight: 900;
    color: #1c128e;
  }
    `
  ]
})
export class AppComponent implements OnInit {
  title = 'HawkEye';
  ngOnInit(): void {
    AOS.init({
      offset: 50,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
      once: true
    });
  }

}
