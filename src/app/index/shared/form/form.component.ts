import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/helper/data.service';
import { formValidation } from 'src/app/helper/form-validation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})
export class FormComponent implements OnInit {
  contactForm!: FormGroup;
  loading: boolean = false;

  constructor(private ds: DataService, public validator: formValidation, private fb: FormBuilder, private toastr: ToastrService) {
    this.contactForm = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      agreed: new FormControl(),
      wantToReceiveNotifications: new FormControl(),
    })
  }

  ngOnInit() {
  }

  onSubmit(form: any) {
    if (this.contactForm.invalid) {
      return
    }
    let data = this.contactForm.getRawValue()
    data.phone = data.phone.toString()
    data.agreed = data.agreed == 1 ? 1 : 0
    data.wantToReceiveNotifications = data.wantToReceiveNotifications == 1 ? 1 : 0
    this.loading = true;
    form.resetForm();
    this.ds.saveContactUs(data).subscribe((res: any) => {
      this.loading = false;
      if (res.success) {
        this.toastr.success('Form submitted successfully', 'Success');
      } else {
        this.toastr.error("Something went wrong!", 'Error');
      }
      this.loading = false;
    })
  }

  get g() {
    return this.contactForm.controls
  }

}
