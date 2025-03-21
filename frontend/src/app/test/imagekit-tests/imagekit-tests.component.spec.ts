import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagekitTestsComponent } from './imagekit-tests.component';

describe('ImagekitTestsComponent', () => {
  let component: ImagekitTestsComponent;
  let fixture: ComponentFixture<ImagekitTestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagekitTestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagekitTestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
