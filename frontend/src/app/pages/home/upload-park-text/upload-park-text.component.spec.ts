import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadParkTextComponent } from './upload-park-text.component';

describe('UploadParkTextComponent', () => {
  let component: UploadParkTextComponent;
  let fixture: ComponentFixture<UploadParkTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadParkTextComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadParkTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
