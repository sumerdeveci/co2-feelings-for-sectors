import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { AgGridModule } from 'ag-grid-angular';
import { RouterModule } from '@angular/router';
import { FeelingFormModule } from 'src/app/modules/components/feeling-form/feeling-form.module';

import { FeelingTablePageRoutingModule } from 'src/app/modules/pages/feeling-table-page/feeling-table-page-routing.module';
import { FeelingTablePageComponent } from 'src/app/modules/pages/feeling-table-page/feeling-table-page.component';
import { AgTableActionButtonsComponent } from 'src/app/components/ag-table-action-buttons/ag-table-action-buttons.component';
import { FeelingTableComponent } from 'src/app/components/feeling-table/feeling-table.component';
import { EditFeelingDialogComponent } from 'src/app/components/dialogs/edit-feeling-dialog/edit-feeling-dialog.component';
import { CoreModule } from 'src/app/modules/other/core/core.module';

@NgModule({
  imports: [
    CoreModule,

    // Material UI
    MatButtonModule,

    // Components
    FeelingFormModule,

    // Other
    AgGridModule.withComponents([AgTableActionButtonsComponent]),
    FeelingTablePageRoutingModule
  ],
  declarations: [
    FeelingTablePageComponent,
    FeelingTableComponent,
    AgTableActionButtonsComponent,
    EditFeelingDialogComponent,
  ],
})
export class FeelingTablePageModule { }
