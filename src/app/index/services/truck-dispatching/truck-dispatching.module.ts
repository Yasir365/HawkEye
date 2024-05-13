import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruckDispatchingComponent } from './truck-dispatching.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CarouselModule } from 'ngx-owl-carousel-o';

const routes: Routes = [
  { path: '', component: TruckDispatchingComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    CarouselModule
  ],
  declarations: [TruckDispatchingComponent]
})
export class TruckDispatchingModule { }
