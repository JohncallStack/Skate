import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObstaclesTabComponent } from './obstacles-tab.component';

describe('ObstaclesTabComponent', () => {
  let component: ObstaclesTabComponent;
  let fixture: ComponentFixture<ObstaclesTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObstaclesTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObstaclesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
