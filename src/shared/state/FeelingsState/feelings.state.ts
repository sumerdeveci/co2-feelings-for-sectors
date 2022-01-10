import { Injectable } from '@angular/core';
import { State, Action, StateContext, StateToken } from '@ngxs/store';
import { FeelingModel } from 'src/app/models/feeling.model';
import { AddFeelingAction, RemoveFeelingAction, EditFeelingAction } from './feelings.actions';

export class FeelingsStateModel {
  constructor(public items: FeelingModel[]) { };
}

const defaults = {
  items: []
};

export const FEELINGS_STATE_TOKEN = new StateToken<FeelingsStateModel>('feelings');

@State<FeelingsStateModel>({
  name: FEELINGS_STATE_TOKEN,
  defaults
})
@Injectable()
export class FeelingsState {
  @Action(AddFeelingAction)
  add({ getState, setState }: StateContext<FeelingsStateModel>, { feeling }: AddFeelingAction) {
    const state = getState();

    setState({ items: [...state.items, feeling] });
  }

  @Action(RemoveFeelingAction)
  remove({ getState, setState }: StateContext<FeelingsStateModel>, { feelingId }: RemoveFeelingAction) {
    const state = getState();
    const filteredItems = state.items.filter(item => item.id !== feelingId);

    setState({ items: filteredItems });
  }

  @Action(EditFeelingAction)
  edit({ getState, setState }: StateContext<FeelingsStateModel>, { feeling }: EditFeelingAction) {
    const state = getState();
    const filteredItems = state.items.filter(item => item.id !== feeling.id);

    if (filteredItems.length !== state.items.length - 1) {
      throw new Error('Cannot edit, feeling id not found')
    } else {
      setState({ items: [...filteredItems, feeling] });
    }
  }
}
