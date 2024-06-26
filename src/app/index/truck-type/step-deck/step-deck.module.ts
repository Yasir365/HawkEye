import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepDeckComponent } from './step-deck.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: StepDeckComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [StepDeckComponent]
})
export class StepDeckModule { }
