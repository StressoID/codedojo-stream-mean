import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdModule } from './md/md.module';

@NgModule({
  imports: [
    CommonModule,
    MdModule,
  ],
  declarations: [],
  exports: [
    MdModule,
  ],
})
export class SharedModule {
}
