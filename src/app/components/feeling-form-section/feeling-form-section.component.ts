import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { FeelingModel } from 'src/app/models/feeling.model';
import { AddFeelingAction } from 'src/shared/state/FeelingsState/feelings.actions';
@Component({
  selector: 'feeling-form-section',
  templateUrl: './feeling-form-section.component.html',
  styleUrls: ['./feeling-form-section.component.scss']
})
export class FeelingFormSectionComponent {
  constructor(private store: Store,) { }

  onSubmit = (newFeeling: FeelingModel) => {
    this.store.dispatch(new AddFeelingAction(newFeeling))
  }
}
