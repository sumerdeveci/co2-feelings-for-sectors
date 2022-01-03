import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingTablePageComponent } from './feeling-table-page.component';

describe('FeelingTablePageComponent', () => {
  let component: FeelingTablePageComponent;
  let fixture: ComponentFixture<FeelingTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingTablePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
