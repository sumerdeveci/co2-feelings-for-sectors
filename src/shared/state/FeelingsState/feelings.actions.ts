import { FeelingModel } from "src/app/models/feeling.model";

export class AddFeelingAction {
  static readonly type = '[Feelings] Add item';
  constructor(public feeling: FeelingModel) { }
}

export class RemoveFeelingAction {
  static readonly type = '[Feelings] Remove item';
  constructor(public feelingId: string) { }
}

export class EditFeelingAction {
  static readonly type = '[Feelings] Edit item';
  constructor(public feeling: FeelingModel) { }
}
