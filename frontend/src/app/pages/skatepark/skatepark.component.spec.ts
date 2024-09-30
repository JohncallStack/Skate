import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkateparkComponent } from './skatepark.component';

describe('SkateparkComponent', () => {
  let component: SkateparkComponent;
  let fixture: ComponentFixture<SkateparkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkateparkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkateparkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
