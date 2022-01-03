import { TestBed, async } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { FeelingsState } from './feelings.state';
import { AddFeelingAction } from './feelings.actions';

describe('Feelings actions', () => {
  let store: Store;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([FeelingsState])]
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('should create an action and add an item', () => {
    store.dispatch(new AddFeelingAction({ id: '123', sectorName: 'sectorName', co2Amount: 50, feelingEmoji: '🙂' }));
    store.select(state => state.feelings.items).subscribe((items: string[]) => {
      expect(items).toEqual(jasmine.objectContaining(['item-1']));
    });
  });

});
