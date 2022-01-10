import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FeelingFormModule } from 'src/app/modules/components/feeling-form/feeling-form.module';
import { CoreModule } from 'src/app/modules/other/core/core.module';

import { NewFeelingPageComponent } from './new-feeling-page.component';
import { FeelingFormSectionComponent } from 'src/app/components/feeling-form-section/feeling-form-section.component';
import { NewFeelingPageRoutingModule } from './new-feeling-page-routing.module';

@NgModule({
  imports: [
    CoreModule,

    // Material UI
    MatCardModule,
    MatButtonModule,
    MatDialogModule,

    // Components
    FeelingFormModule,

    // Other
    NewFeelingPageRoutingModule,
  ],
  declarations: [
    NewFeelingPageComponent,
    FeelingFormSectionComponent,
  ],
})
export class NewFeelingPageModule { }