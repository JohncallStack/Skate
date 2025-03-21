import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagekitTestSetHeightComponent } from './imagekit-test-set-height.component';

describe('ImagekitTestSetHeightComponent', () => {
  let component: ImagekitTestSetHeightComponent;
  let fixture: ComponentFixture<ImagekitTestSetHeightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagekitTestSetHeightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagekitTestSetHeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
