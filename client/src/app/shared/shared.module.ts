import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModule} from "./md/mat.module";

@NgModule({
  imports: [
    CommonModule,
    MatModule,
  ],
  declarations: [],
  exports: [
    MatModule,
  ],
})
export class SharedModule {
}
