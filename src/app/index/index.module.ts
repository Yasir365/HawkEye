import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { LayoutModule } from './layout/layout.module';
import { IndexRouting } from './index.routing';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    IndexRouting,
    LayoutModule,
    SharedModule,
    FormsModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
