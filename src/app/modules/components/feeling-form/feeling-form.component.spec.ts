import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelingFormComponent } from './feeling-form.component';

describe('FeelingFormComponent', () => {
  let component: FeelingFormComponent;
  let fixture: ComponentFixture<FeelingFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelingFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeelingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
