import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { FeelingFormComponent } from 'src/app/modules/components/feeling-form/feeling-form.component';
import { EditEmojiDialogComponent } from 'src/app/components/dialogs/edit-emoji-dialog/edit-emoji-dialog.component';
import { CoreModule } from 'src/app/modules/other/core/core.module';
import { FormCoreModule } from 'src/app/modules/other/form-core/form-core.module';
import { SectorService } from 'src/app/services/data/sector.service';

@NgModule({
  imports: [
    CoreModule,
    FormCoreModule,

    // Material UI
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
  ],
  declarations: [
    FeelingFormComponent,
    EditEmojiDialogComponent,
  ],
  providers: [SectorService],
  exports: [
    FeelingFormComponent,
  ],
})
export class FeelingFormModule { }
