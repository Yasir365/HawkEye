import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  services: any = []
  workWithUs: any = []
  constructor() { }

  ngOnInit() {
    this.services = [
      { count: '01', imgSrc: "./assets/services/s1.webp", link: "/services/truck-dispatching", innerText: '<span class="text">Truck <br> dispatching</span>' },
      { count: '02', imgSrc: "./assets/services/s2.webp", link: "/services/billing", innerText: '<span class="text">Billing</span>' },
      { count: '03', imgSrc: "./assets/services/s3.webp", link: "/services/document-management", innerText: '<span class="text">Document Management <br/> & Paperwork</span>' },
      { count: '04', imgSrc: "./assets/services/s4.webp", link: "/services/factoring-services", innerText: '<span class="text">Factoring service</span>' },
      { count: '05', imgSrc: "./assets/services/s5.webp", link: "/services/rate-negotiation", innerText: '<span class="text">Rate Negotiation</span>' },
      { count: '06', imgSrc: "./assets/services/s6.webp", link: "/services/safety", innerText: '<span class="text">SAFTY / DOT compliance</span>' },
      { count: '07', imgSrc: "./assets/services/s7.webp", link: "/services/trucking-invoice", innerText: '<span class="text">Trucking Invoice Service</span>' },
      { count: '08', imgSrc: "./assets/services/s8.webp", link: "/services/truck-dispatch", innerText: '<span class="text">Truck Document Dispatch</span>' }
    ]

    this.workWithUs = [
      { imgSrc: "./assets/work-with-us/img1.webp", link:"/truck-type/dry-van", text: "Dry Van" },
      { imgSrc: "./assets/work-with-us/img2.jpg", link:"/truck-type/step-deck", text: "Step Deck" },
      { imgSrc: "./assets/work-with-us/img3.jpg", link:"/truck-type/reefer", text: "Reefer" },
      { imgSrc: "./assets/work-with-us/img4.jpg", link:"/truck-type/flatbed", text: "Flatbed" },
      { imgSrc: "./assets/work-with-us/img5.jpg", link:"/truck-type/power-only", text: "Power Only" },
      { imgSrc: "./assets/work-with-us/img6.jpg", link:"/truck-type/hotshot", text: "Hotshot" },
      { imgSrc: "./assets/work-with-us/img7.jpg", link:"/truck-type/box-truck", text: "Boxtruck" },
      { imgSrc: "./assets/work-with-us/img8.webp", link:"/truck-type/straight-truck", text: "Straight truck" },
    ]
  }

}
