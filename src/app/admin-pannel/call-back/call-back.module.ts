import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallBackComponent } from './call-back.component';
import { Routes, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: CallBackComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CallBackComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class CallBackModule { }
