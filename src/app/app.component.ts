import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet> `,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    AOS.init({
      offset: 200,
      duration: 700,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
  title = 'AdminPannel';

}
