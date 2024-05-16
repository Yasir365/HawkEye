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
    opacity: 0.5; /* Adjust opacity as needed */
    z-index: 1000; /* Ensure it appears above other content */
  }

  .watermark p {
    font-size: 5rem; /* Adjust font size as needed */
    font-weight: 900;
    color: blue; /* Adjust color as needed */
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
