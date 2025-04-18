import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicModalComponent } from './pic-modal.component';

describe('PicModalComponent', () => {
  let component: PicModalComponent;
  let fixture: ComponentFixture<PicModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PicModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PicModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
