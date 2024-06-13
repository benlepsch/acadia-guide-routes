import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaModalComponent } from './beta-modal.component';

describe('BetaModalComponent', () => {
  let component: BetaModalComponent;
  let fixture: ComponentFixture<BetaModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BetaModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BetaModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
