import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgTableActionButtonsComponent } from './ag-table-action-buttons.component';

describe('AgTableActionButtonsComponent', () => {
  let component: AgTableActionButtonsComponent;
  let fixture: ComponentFixture<AgTableActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgTableActionButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgTableActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
