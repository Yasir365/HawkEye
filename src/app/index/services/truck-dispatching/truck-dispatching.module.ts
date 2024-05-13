import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDispatchingComponent } from './truck-dispatching.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: TruckDispatchingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,

  ],
  declarations: [TruckDispatchingComponent]
})
export class TruckDispatchingModule { }
