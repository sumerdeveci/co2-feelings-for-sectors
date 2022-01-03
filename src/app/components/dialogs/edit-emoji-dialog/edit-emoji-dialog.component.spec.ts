import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmojiDialogComponent } from './edit-emoji-dialog.component';

describe('EditEmojiDialogComponent', () => {
  let component: EditEmojiDialogComponent;
  let fixture: ComponentFixture<EditEmojiDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEmojiDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmojiDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
