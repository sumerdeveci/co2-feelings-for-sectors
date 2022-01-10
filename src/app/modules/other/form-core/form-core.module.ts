import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/modules/other/core/core.module';
import { FormService } from 'src/app/services/utils/form/form.service';

@NgModule({
  declarations: [],
  imports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [FormService],
  exports: [
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormCoreModule { }
