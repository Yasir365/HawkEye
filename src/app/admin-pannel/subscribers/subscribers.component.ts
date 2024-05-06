import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.scss']
})
export class SubscribersComponent implements OnInit {
  subscribers: any = [];
  loader = false;
  page = 1;
  itemsPerPage = 10;
  totalRecords = 15;

  constructor(private api: DataService) { }

  ngOnInit() {
    this.getSubscriber()
  }

  getSubscriber(){
    this.loader = true;
    let params={
      page: this.page,
      perPage: this.itemsPerPage
    }
    this.api.getSubscribers(params).subscribe((res:any)=>{
      if(res.success){
        this.subscribers = res.data.data;
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
