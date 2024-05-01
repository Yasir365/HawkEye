import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { GetStartComponent } from './get-start/get-start.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [FormComponent, GetStartComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormComponent, GetStartComponent],

})
export class SharedModule { }
