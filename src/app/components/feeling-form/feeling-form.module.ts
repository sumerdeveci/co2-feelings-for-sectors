import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { FeelingFormComponent } from 'src/app/components/feeling-form/feeling-form.component';
import { EditEmojiDialogComponent } from 'src/app/components/dialogs/edit-emoji-dialog/edit-emoji-dialog.component';

@NgModule({
  imports: [
    CommonModule,

    // Material UI
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,

    // Other
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    FeelingFormComponent,
    EditEmojiDialogComponent,
  ],
  exports: [
    FeelingFormComponent,
  ],
})
export class FeelingFormModule { }
