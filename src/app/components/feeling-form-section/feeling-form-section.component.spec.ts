import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { FeelingsState } from 'src/shared/state/FeelingsState/feelings.state';

import { FeelingFormSectionComponent } from './feeling-form-section.component';

describe('FeelingFormSectionComponent', () => {
  let component: FeelingFormSectionComponent;
  let fixture: ComponentFixture<FeelingFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeelingFormSectionComponent],
      imports: [NgxsModule.forRoot([FeelingsState])],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingFormSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not fail to dispatch an action', () => {
    expect(component.onSubmit({ id: '123', sectorName: 'abc', co2Amount: 20, feelingEmoji: '😄' })).not.toThrowError();
  });
});
