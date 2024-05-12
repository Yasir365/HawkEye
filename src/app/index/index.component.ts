import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let modal = document.getElementById('callModalbutton');
    setTimeout(() => {
      modal?.click();
    }, 1000);
    setTimeout(() => {
      let closeModal = document.getElementById('closeModal');
      // closeModal?.click();
    }, 10000);
  }

}
