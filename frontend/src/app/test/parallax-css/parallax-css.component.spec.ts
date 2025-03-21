import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParallaxCssComponent } from './parallax-css.component';

describe('ParallaxCssComponent', () => {
  let component: ParallaxCssComponent;
  let fixture: ComponentFixture<ParallaxCssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParallaxCssComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParallaxCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
