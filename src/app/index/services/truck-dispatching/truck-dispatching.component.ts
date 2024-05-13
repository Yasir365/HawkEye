import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-truck-dispatching',
  templateUrl: './truck-dispatching.component.html',
})
export class TruckDispatchingComponent implements OnInit {
  faq1 = false;
  faq2 = false;
  faq3 = false;
  faq4 = false;
  faq5 = false;
  faq6 = false;
  faq7 = false;
  faq8 = false;

  constructor() { }

  ngOnInit() {
  }

  toggleCollapse(section: string) {
    if (section == 'faq1') {
      this.faq1 = !this.faq1
    } else if (section == 'faq2') {
      this.faq2 = !this.faq2
    } else if (section == 'faq3') {
      this.faq3 = !this.faq3
    } else if (section == 'faq4') {
      this.faq4 = !this.faq4
    } else if (section == 'faq5') {
      this.faq5 = !this.faq5
    } else if (section == 'faq6') {
      this.faq6 = !this.faq6
    } else if (section == 'faq7') {
      this.faq7 = !this.faq7
    } else if (section == 'faq8') {
      this.faq8 = !this.faq8
    }
  }

}
