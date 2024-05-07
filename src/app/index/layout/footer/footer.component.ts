import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/helper/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loader = false;
  email = '';
  date = new Date().getFullYear();
  
  constructor(private api: DataService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  subscribe() {
    this.loader = true;
    if (this.email == '') return;
    if (this.email.match(/^\s*$/) || this.email == null) return;
    this.api.saveSubscribers({ email: this.email }).subscribe((res: any) => {
      window.scrollTo(0, 0);
      this.email = '';
      this.loader = false;
      if (res.success) {
        this.toastr.success("Successfully Subscribed", 'Success');
        this.email = '';
      } else {
        this.toastr.error(res.error.general, 'Error');
      }
    })
  }

  scroll(){
    window.scrollTo(0, 0);
  }

}
