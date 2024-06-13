import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorModalComponent } from './anchor-modal.component';

describe('AnchorModalComponent', () => {
  let component: AnchorModalComponent;
  let fixture: ComponentFixture<AnchorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnchorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
