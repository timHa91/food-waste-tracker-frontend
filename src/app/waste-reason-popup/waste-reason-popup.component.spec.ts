import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteReasonPopupComponent } from './waste-reason-popup.component';

describe('WasteReasonPopupComponent', () => {
  let component: WasteReasonPopupComponent;
  let fixture: ComponentFixture<WasteReasonPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WasteReasonPopupComponent]
    });
    fixture = TestBed.createComponent(WasteReasonPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
