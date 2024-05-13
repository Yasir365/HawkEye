import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  isFooter: boolean = true;

  constructor(private route: Router) {
    const routeExceptions = ['/login',]

    this.route.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      let url: any = this.route.url.split('?')

      if (routeExceptions.indexOf(url[0]) >= 0) {
        this.isFooter = false
      } else {
        this.isFooter = true
      }
    })
  }


  ngOnInit() {
    let modal = document.getElementById('callModalbutton');
    let closeModal = document.getElementById('closeModal');
    setTimeout(() => {
      // modal?.click();
    }, 1000);
    setTimeout(() => {
      // closeModal?.click();
    }, 10000);

  }

}
