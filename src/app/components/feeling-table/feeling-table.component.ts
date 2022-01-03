import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { ColDef } from 'ag-grid-community';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { MatDialog } from '@angular/material/dialog'

import { FeelingModel } from 'src/app/models/feeling.model';
import { AgTableActionButtonsComponent } from 'src/app/components/ag-table-action-buttons/ag-table-action-buttons.component';
import { RemoveFeelingAction } from 'src/shared/state/FeelingsState/feelings.actions';
import { EditFeelingDialogComponent } from 'src/app/components/dialogs/edit-feeling-dialog/edit-feeling-dialog.component';

@UntilDestroy()
@Component({
  selector: 'feeling-table',
  templateUrl: './feeling-table.component.html',
  styleUrls: ['./feeling-table.component.scss']
})
export class FeelingTableComponent {
  agFrameworkComponents: any;
  rowsData: FeelingModel[] = [];

  constructor(
    private store: Store,
    public editFeelingDialog: MatDialog
  ) {
    this.store.select(state => state.feelings.items)
      .pipe(untilDestroyed(this))
      .subscribe((feelings: FeelingModel[]) => {
        this.rowsData = feelings
      });

    this.agFrameworkComponents = {
      actionButtonsRenderer: AgTableActionButtonsComponent,
    }
  }

  private onEditButtonClick = (rowData: FeelingModel) => {
    this.editFeelingDialog.open(EditFeelingDialogComponent, {
      width: '400px',
      data: { feeling: rowData },
    });
  }

  private onDeleteButtonClick = (rowData: FeelingModel) => {
    this.store.dispatch(new RemoveFeelingAction(rowData.id))
  }

  columnDefs: ColDef[] = [
    {
      field: 'id',
      hide: true,
    },
    {
      headerName: 'Sector',
      field: 'sectorName',
      lockPosition: true,
      width: 500,
    },
    {
      headerName: 'CO2',
      field: 'co2Amount',
      lockPosition: true,
      width: 150,
    },
    {
      headerName: 'Feeling',
      field: 'feelingEmoji',
      lockPosition: true,
      width: 150,
    },
    {
      headerName: 'Actions',
      lockPosition: true,
      cellRenderer: 'actionButtonsRenderer',
      cellRendererParams: {
        buttonConfigs: [{
          buttonLabel: 'Edit',
          onButtonClick: this.onEditButtonClick,
        }, {
          buttonLabel: 'Delete',
          onButtonClick: this.onDeleteButtonClick,
        }]
      },
    }
  ];
}
