import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageTestComponent } from './image-test.component';

describe('ImageTestComponent', () => {
  let component: ImageTestComponent;
  let fixture: ComponentFixture<ImageTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
