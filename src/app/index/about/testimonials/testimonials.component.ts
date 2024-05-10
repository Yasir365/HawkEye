import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {
  count = [
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
  constructor() { }

  ngOnInit() {
  }

}
