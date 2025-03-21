import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSpacerComponent } from './bottom-spacer.component';

describe('BottomSpacerComponent', () => {
  let component: BottomSpacerComponent;
  let fixture: ComponentFixture<BottomSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSpacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
