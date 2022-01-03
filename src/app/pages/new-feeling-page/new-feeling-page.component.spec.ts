import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeelingPageComponent } from './new-feeling-page.component';

describe('NewFeelingPage', () => {
  let component: NewFeelingPageComponent;
  let fixture: ComponentFixture<NewFeelingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeelingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeelingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
