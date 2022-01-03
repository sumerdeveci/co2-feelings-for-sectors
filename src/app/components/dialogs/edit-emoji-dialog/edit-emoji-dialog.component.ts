import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  feelingEmoji: string;
}

@Component({
  selector: 'edit-emoji-dialog',
  templateUrl: './edit-emoji-dialog.component.html',
  styleUrls: ['./edit-emoji-dialog.component.scss']
})
export class EditEmojiDialogComponent {
  feelingEmoji: string = '';

  constructor(
    public dialogRef: MatDialogRef<EditEmojiDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {
    this.feelingEmoji = data.feelingEmoji;
  }

  onCancelClick = (): void => {
    // Pass the data which was originally given to the component, as the edit operation is cancelled now
    this.dialogRef.close(this.data.feelingEmoji);
  }

  onSave = (): void => {
    this.dialogRef.close(this.feelingEmoji);
  }
}
