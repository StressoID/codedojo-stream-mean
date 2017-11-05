import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCardModule, MdIconModule, MdInputModule, MdToolbarModule, } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
  declarations: [],
  exports: [
    MdToolbarModule,
    MdCardModule,
    MdInputModule,
    MdButtonModule,
    MdIconModule
  ],
})
export class MdModule {
}
