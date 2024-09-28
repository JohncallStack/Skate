import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTabComponent } from './weather-tab.component';

describe('WeatherTabComponent', () => {
  let component: WeatherTabComponent;
  let fixture: ComponentFixture<WeatherTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
