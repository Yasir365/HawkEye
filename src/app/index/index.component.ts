import { Component, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { filter } from 'rxjs';
import intlTelInput from 'intl-tel-input';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
})
export class IndexComponent implements OnInit {
  isFooter: boolean = true;
  @ViewChild('telInput') telInput: any;
  selectedCountryCode!: any;
  iti: any;
  phoneNumber!: any;

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
      modal?.click();
    }, 1000);
    setTimeout(() => {
      closeModal?.click();
    }, 10000);

  }

  ngAfterViewInit() {
    this.iti = intlTelInput(this.telInput.nativeElement, {
      utilsScript: "assets/scripts/utils.js",
      initialCountry: "us",
      separateDialCode: true,
      nationalMode: false,
      formatOnDisplay: true
    });
    this.selectedCountryCode = this.iti.getSelectedCountryData().dialCode;
  }

  ngOnDestroy() {
    this.iti.destroy();
  }

  onInputKeyPress = (event: KeyboardEvent) => {
    const allowedChars = /[0-9\+\-\ ]/;
    const allowedCtrlChars = /[axcv]/;
    const allowedOtherKeys = [
      'ArrowLeft',
      'ArrowUp',
      'ArrowRight',
      'ArrowDown',
      'Home',
      'End',
      'Insert',
      'Delete',
      'Backspace',
    ];

    if (
      !allowedChars.test(event.key) &&
      !(event.ctrlKey && allowedCtrlChars.test(event.key)) &&
      !allowedOtherKeys.includes(event.key)
    ) {
      event.preventDefault();
    }
  }

  onPhoneNumberChange = () => {
    const phoneNumber = this.iti.getNumber();
    this.phoneNumber.get('phone_number')?.setValue(phoneNumber);
  }
}
