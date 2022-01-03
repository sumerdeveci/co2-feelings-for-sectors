import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFeelingDialogComponent } from './edit-feeling-dialog.component';

describe('EditEmojiDialogComponent', () => {
  let component: EditFeelingDialogComponent;
  let fixture: ComponentFixture<EditFeelingDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFeelingDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFeelingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
