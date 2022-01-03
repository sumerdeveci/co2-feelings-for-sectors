import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FeelingFormModule } from 'src/app/components/feeling-form/feeling-form.module';

import { NewFeelingPageComponent } from 'src/app/pages/new-feeling-page/new-feeling-page.component';
import { FeelingFormSectionComponent } from 'src/app/components/feeling-form-section/feeling-form-section.component';

@NgModule({
  imports: [
    CommonModule,

    // Material UI
    MatCardModule,
    MatButtonModule,
    MatDialogModule,

    // Components
    FeelingFormModule,

    // Other
    RouterModule,
  ],
  declarations: [
    NewFeelingPageComponent,
    FeelingFormSectionComponent,
  ]
})
export class NewFeelingPageModule { }