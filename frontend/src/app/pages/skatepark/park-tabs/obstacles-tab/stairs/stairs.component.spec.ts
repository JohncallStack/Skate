import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StairsComponent } from './stairs.component';

describe('StairsComponent', () => {
  let component: StairsComponent;
  let fixture: ComponentFixture<StairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StairsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
