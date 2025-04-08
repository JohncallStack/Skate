import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSpacerComponent } from './top-spacer.component';

describe('TopSpacerComponent', () => {
  let component: TopSpacerComponent;
  let fixture: ComponentFixture<TopSpacerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopSpacerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopSpacerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
