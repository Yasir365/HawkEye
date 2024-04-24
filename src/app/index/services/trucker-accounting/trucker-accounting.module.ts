import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckerAccountingComponent } from './trucker-accounting.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: TruckerAccountingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TruckerAccountingComponent]
})
export class TruckerAccountingModule { }
