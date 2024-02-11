import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrongModalComponent } from './wrong-modal.component';

describe('WrongModalComponent', () => {
  let component: WrongModalComponent;
  let fixture: ComponentFixture<WrongModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WrongModalComponent]
    });
    fixture = TestBed.createComponent(WrongModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
