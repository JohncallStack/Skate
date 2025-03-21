import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoTestsComponentComponent } from './photo-tests-component.component';

describe('PhotoTestsComponentComponent', () => {
  let component: PhotoTestsComponentComponent;
  let fixture: ComponentFixture<PhotoTestsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PhotoTestsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhotoTestsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
