import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateparksComponent } from './skateparks.component';

describe('SkateparksComponent', () => {
  let component: SkateparksComponent;
  let fixture: ComponentFixture<SkateparksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkateparksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkateparksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
