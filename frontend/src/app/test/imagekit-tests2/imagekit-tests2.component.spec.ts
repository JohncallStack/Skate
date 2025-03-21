import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagekitTests2Component } from './imagekit-tests2.component';

describe('ImagekitTests2Component', () => {
  let component: ImagekitTests2Component;
  let fixture: ComponentFixture<ImagekitTests2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagekitTests2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagekitTests2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
