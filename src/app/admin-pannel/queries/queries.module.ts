import { NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QueriesComponent } from './queries.component';
import { RouterModule, Routes } from '@angular/router';
import { AdminSharedModule } from '../amin-shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', component: QueriesComponent }
]
@NgModule({
  imports: [
    CommonModule,
    AdminSharedModule,
    NgxPaginationModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [QueriesComponent],
  schemas: [NO_ERRORS_SCHEMA]

})
export class QueriesModule { }
