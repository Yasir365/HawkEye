import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-call-back',
  templateUrl: './call-back.component.html',
  styleUrls: ['./call-back.component.scss']
})
export class CallBackComponent implements OnInit {
  callbacks: any = [];
  loader = false;
  page = 1;
  itemsPerPage = 15;
  totalRecords = 0;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.getSubscriber()
  }

  getSubscriber() {
    this.loader = true;
    let params = {
      page: this.page,
      perPage: this.itemsPerPage
    }
    this.api.getCallback(params).subscribe((res: any) => {
      if (res.success) {
        this.callbacks = res.data.data;
        this.totalRecords = res.data.total;
        this.loader = false;
      }
    })
  }

  onPageChange(pageNumber: number) {
    this.page = pageNumber;
    this.getSubscriber();
  }
}