import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingFormSectionComponent } from './feeling-form-section.component';

describe('FeelingFormSectionComponent', () => {
  let component: FeelingFormSectionComponent;
  let fixture: ComponentFixture<FeelingFormSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingFormSectionComponent ]
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
});
