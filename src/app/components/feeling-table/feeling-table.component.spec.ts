import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingTableComponent } from './feeling-table.component';

describe('FeelingTableComponent', () => {
  let component: FeelingTableComponent;
  let fixture: ComponentFixture<FeelingTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
