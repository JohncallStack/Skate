import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParralaxImageComponent } from './parralax-image.component';

describe('ParralaxImageComponent', () => {
  let component: ParralaxImageComponent;
  let fixture: ComponentFixture<ParralaxImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParralaxImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParralaxImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
