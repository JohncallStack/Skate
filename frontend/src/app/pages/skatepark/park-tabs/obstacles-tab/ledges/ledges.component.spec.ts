import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgesComponent } from './ledges.component';

describe('LedgesComponent', () => {
  let component: LedgesComponent;
  let fixture: ComponentFixture<LedgesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LedgesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LedgesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
