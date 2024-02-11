import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectModelComponent } from './correct-model.component';

describe('CorrectModelComponent', () => {
  let component: CorrectModelComponent;
  let fixture: ComponentFixture<CorrectModelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrectModelComponent]
    });
    fixture = TestBed.createComponent(CorrectModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
