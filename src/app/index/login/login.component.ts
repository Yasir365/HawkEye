import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/helper/data.service';
import { formValidation } from 'src/app/helper/form-validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  loginError: boolean = false;

  constructor(public validator: formValidation, private fb: FormBuilder, private api: DataService, private router: Router) {
    this.loginForm = this.fb.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
    })
  }

  ngOnInit() {
    if (localStorage.getItem('token')) this.router.navigate(['/admin']);
  }

  get g() {
    return this.loginForm.controls
  }

  onSubmit(form: any) {
    this.loading = true;
    if (this.loginForm.invalid) {
      this.loading = false;
      return
    }

    let data = this.loginForm.getRawValue();
    form.resetForm();
    this.api.login(data).subscribe((res: any) => {
      this.loading = false;
      if (res.success) {
        localStorage.setItem('token', res.data.token)
        this.router.navigate(['/admin']);
      } else {
        this.loginError = true;
      }
    })
  }


}
