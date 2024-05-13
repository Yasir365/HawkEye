import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-truck-dispatching',
  templateUrl: './truck-dispatching.component.html',
  styleUrls: ['./truck-dispatching.component.scss']
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

  customOptions1: OwlOptions = {
    dots: false,
    nav: true,
    margin: 30,
    navText: ['<img src= "assets/vector1.png" />', '<img src= "assets/vector1.png" />'],
    autoplay: true,
    loop: true,
    navSpeed: 700,
    autoplaySpeed: 1000,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 1
      },
      740: {
        items: 3
      },
    },
  }

  customOptions2: OwlOptions = {
    dots: true,
    nav: true,
    margin: 30,
    navText: ['<img src= "assets/left.svg" />', '<img src= "assets/right.svg" />'],
    autoplay: true,
    loop: true,
    navSpeed: 700,
    autoplaySpeed: 1000,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1
      },
    },
  }

  testimonials = [
    {
      name: 'Jay Sanders',
      sr_no: 'MC # 104970',
      description: "Place my trucking business in Hawkeye Freights & Dispatch's hands and haven't needed another dispatcher since. Outstanding Communication, very knowledgeable of the business, and they don't break the bank on percentage. Worth way more than other companies charging 10+ percent. Thank you, guys. "
    },
    {
      name: 'Sam Jose',
      sr_no: 'MC# 717422',
      description: "Working with Hawkeye Freights & Dispatch has been a game-changer for our trucking business. Their personalized approach, attention to detail, and commitment to excellence have truly set them apart in the industry. The team at Hawkeye goes above and beyond to ensure our trucks are matched with the right loads, keeping our operations running smoothly and efficiently."
    }
  ]

  workWithUs = [
    { imgSrc: "./assets/work-with-us/img1.webp", link: "/truck-type/dry-van", text: "Dry Van" },
    { imgSrc: "./assets/work-with-us/img2.jpg", link: "/truck-type/step-deck", text: "Step Deck" },
    { imgSrc: "./assets/work-with-us/img3.jpg", link: "/truck-type/reefer", text: "Reefer" },
    { imgSrc: "./assets/work-with-us/img4.jpg", link: "/truck-type/flatbed", text: "Flatbed" },
    { imgSrc: "./assets/work-with-us/img5.jpg", link: "/truck-type/power-only", text: "Power Only" },
    { imgSrc: "./assets/work-with-us/img6.jpg", link: "/truck-type/hotshot", text: "Hotshot" },
    { imgSrc: "./assets/work-with-us/img7.jpg", link: "/truck-type/box-truck", text: "Boxtruck" },
    { imgSrc: "./assets/work-with-us/img8.webp", link: "/truck-type/straight-truck", text: "Straight truck" },
  ]

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
