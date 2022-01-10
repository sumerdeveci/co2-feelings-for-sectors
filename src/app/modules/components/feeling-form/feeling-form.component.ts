import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog'
import * as uuid from 'uuid';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

import { EditEmojiDialogComponent } from 'src/app/components/dialogs/edit-emoji-dialog/edit-emoji-dialog.component';
import { FeelingModel } from 'src/app/models/feeling.model';
import { SectorService } from 'src/app/services/data/sector.service';
import { ErrorService } from 'src/app/services/utils/error/error.service';
import { FormService } from 'src/app/services/utils/form/form.service';

@UntilDestroy()
@Component({
  selector: 'feeling-form',
  templateUrl: './feeling-form.component.html',
  styleUrls: ['./feeling-form.component.scss']
})
export class FeelingFormComponent implements OnInit {
  sectorNames: string[] = [];
  feelingForm: FormGroup = new FormGroup({
    sectorName: new FormControl(null, [Validators.required]),
    co2Amount: new FormControl(null, [Validators.required, Validators.min(0)]),
    feelingEmoji: new FormControl(null, [Validators.required, this.formService.singleEmojijValidator()]),
  });

  @Input() pressSubmit: (feeling: FeelingModel) => void =
    () => console.warn('FeelingFormComponent -> No function assigned for the onSubmit variable');

  @Input() defaultFeeling: Partial<FeelingModel> | undefined;

  constructor(
    private sectorService: SectorService,
    private errorService: ErrorService,
    private formService: FormService,
    public editEmojiDialog: MatDialog
  ) { }

  ngOnInit(): void {
    // Use the input data from defaultFeeling if it exists
    if (this.defaultFeeling) {
      this.feelingForm.setValue({
        sectorName: this.defaultFeeling.sectorName,
        co2Amount: this.defaultFeeling.co2Amount,
        feelingEmoji: this.defaultFeeling.feelingEmoji,
      })
    }

    // Get sectors data
    this.sectorService
      .getSectors()
      .pipe(untilDestroyed(this))
      .subscribe({
        next: (sectorsResponse) => (this.sectorNames = sectorsResponse.children.map(sector => sector.name)),
        error: (error) => this.errorService.handleError(error)
      });
  }

  onSubmit = (): void => {
    if (this.feelingForm.valid) {
      const { sectorName, co2Amount, feelingEmoji } = this.feelingForm.value;
      const newFeeling: FeelingModel = { id: this.defaultFeeling?.id || uuid.v4(), sectorName: sectorName, co2Amount, feelingEmoji }
      this.pressSubmit(newFeeling);
    }
  }

  openDialog = (): void => {
    const dialogRef = this.editEmojiDialog.open(EditEmojiDialogComponent, {
      width: '300px',
      data: { feelingEmoji: this.feelingForm.value.feelingEmoji },
    });

    dialogRef.afterClosed()
      .pipe(untilDestroyed(this))
      .subscribe(result => {
        this.feelingForm.setValue({ ...this.feelingForm.value, feelingEmoji: result })
      });
  }

  alertDirectEmojiInputNotAllowed = (): void =>
    alert(
      'Direct emoji input is not allowed. Please use the "Edit" button as specified in the mockup here:\n\nhttps://ninjastorage.blob.core.windows.net/htmlexport/1Q8FKHx/7a6e7638-f522-78bd-6a6c-342006bc0f94.html'
    )
}
