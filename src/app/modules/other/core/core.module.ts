import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorService } from 'src/app/services/utils/error/error.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [ErrorService],
  exports: [
    CommonModule,
  ]
})
export class CoreModule { }
