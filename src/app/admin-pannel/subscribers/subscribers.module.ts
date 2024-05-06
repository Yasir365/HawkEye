import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribersComponent } from './subscribers.component';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: SubscribersComponent }
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SubscribersComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SubscribersModule { }
