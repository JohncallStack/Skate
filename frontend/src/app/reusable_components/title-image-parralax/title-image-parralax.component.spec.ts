import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleImageParralaxComponent } from './title-image-parralax.component';

describe('TitleImageParralaxComponent', () => {
  let component: TitleImageParralaxComponent;
  let fixture: ComponentFixture<TitleImageParralaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleImageParralaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleImageParralaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
