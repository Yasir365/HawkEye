import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelLoaderComponent } from './tabel-loader/tabel-loader.component';
import { TimeGap } from './pipes.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [TabelLoaderComponent,TimeGap],
    exports: [TabelLoaderComponent, TimeGap],
})
export class AdminSharedModule { }
