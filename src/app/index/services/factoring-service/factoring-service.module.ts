import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactoringServiceComponent } from './factoring-service.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  { path: '', component: FactoringServiceComponent }
]

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FactoringServiceComponent]
})
export class FactoringServiceModule { }
