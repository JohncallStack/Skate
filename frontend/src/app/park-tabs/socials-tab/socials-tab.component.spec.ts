import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialsTabComponent } from './socials-tab.component';

describe('SocialsTabComponent', () => {
  let component: SocialsTabComponent;
  let fixture: ComponentFixture<SocialsTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialsTabComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
