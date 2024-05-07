import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/helper/data.service';
import { formValidation } from 'src/app/helper/form-validation';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  loading: boolean = false;
  passwrodError: boolean = false;

  constructor(public validator: formValidation, private fb: FormBuilder, private api: DataService, private toastr: ToastrService) {
    this.changePasswordForm = this.fb.group({
      oldPassword: [null, [Validators.required]],
      newPassword: [null, [Validators.required]],
      newPassword_confirmation: [null, [Validators.required]]
    })
   }

  ngOnInit() {
  }

  get g() {
    return this.changePasswordForm.controls;
  }

  onSubmit(form:any){
    if(this.changePasswordForm.invalid){
      return
    }

    let p1 = this.g['newPassword'].value;
    let p2 = this.g['newPassword_confirmation'].value;

    if(p1 != p2){
      this.passwrodError = true;
      return
    }

    this.loading = true;

    let obj = this.changePasswordForm.getRawValue();
    form.resetForm();
    this.api.changePassword(obj).subscribe((res:any)=>{
      this.loading = false;
      if(res.success){
        this.passwrodError = false;
        this.toastr.success(res.msg);
      }else{
        this.toastr.error(res.errors.general);
      }
    })

  }

}
