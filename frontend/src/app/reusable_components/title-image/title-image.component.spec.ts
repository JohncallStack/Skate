import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TitleImageComponent } from './title-image.component';

describe('TitleImageComponent', () => {
  let component: TitleImageComponent;
  let fixture: ComponentFixture<TitleImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
