import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CountUpDirective } from './count-directive/count-up.directive';

const routes: Routes = [
  { path: '', component: HomeComponent }
]
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent, CountUpDirective]
})
export class HomeModule { }
