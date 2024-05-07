import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/helper/data.service';
import { LoaderOptionsObject } from '../amin-shared/loader.interface';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-queries',
  templateUrl: './queries.component.html',
  styleUrls: ['./queries.component.scss']
})
export class QueriesComponent implements OnInit {
  dataFetching = true;
  queries: any = [];
  loader = false;
  searchKeyword$: Subject<string> = new Subject<string>()
  searchKeywordSub: any

  keywords = {
    name: '',
    email: '',
    page: 1,
    itemsPerPage: 10,
    totalRecords: 0
  }

  loaderOptions: LoaderOptionsObject = {
    rows: 5,
    cols: 5,
    colSpans: {
      0: 1
    }
  }


  constructor(private api: DataService) {
    this.getSubscriber()
  }

  ngOnInit() {
    this.searchKeywordSub = this.searchKeyword$
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((searchKeyword) => {
        this.keywords.page = 1
        this.getSubscriber()
      })
  }

  getSubscriber() {
    this.loader = true;
    let params = {
      page: this.keywords.page,
      perPage: this.keywords.itemsPerPage,
      name: this.keywords.name,
      email: this.keywords.email
    }
    this.api.getContactUs(params).subscribe((res: any) => {
      if (res.success) {
        this.queries = res.data.data;
        this.keywords.totalRecords = res.data.total;
        this.loader = false;
      }
    })
  }

  onPageChange(pageNumber: number) {
    this.keywords.page = pageNumber;
    this.getSubscriber();
  }

  searchKeywordChange(value: string) {
    this.searchKeyword$.next(value)
  }

  ngOnDestroy(): void {
    this.searchKeywordSub.unsubscribe()
  }
}
