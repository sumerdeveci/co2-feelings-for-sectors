import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';

import { FeelingModel } from 'src/app/models/feeling.model';
import { EditFeelingAction } from 'src/shared/state/FeelingsState/feelings.actions';

interface DialogData {
  feeling: FeelingModel;
}

@Component({
  selector: 'edit-feeling-dialog',
  templateUrl: './edit-feeling-dialog.component.html',
  styleUrls: ['./edit-feeling-dialog.component.scss']
})
export class EditFeelingDialogComponent {
  feeling: FeelingModel;

  constructor(
    public dialogRef: MatDialogRef<EditFeelingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private store: Store,
  ) {
    this.feeling = this.data.feeling;
  }

  onSubmit = (updatedFeeling: FeelingModel): void => {
    this.store.dispatch(new EditFeelingAction(updatedFeeling))
    this.dialogRef.close()
  }
}
