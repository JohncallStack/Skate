import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestHeight2Component } from './test-height-2.component';

describe('TestHeight2Component', () => {
  let component: TestHeight2Component;
  let fixture: ComponentFixture<TestHeight2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHeight2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHeight2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
