import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParkTabsComponent } from './park-tabs.component';

describe('ParkTabsComponent', () => {
  let component: ParkTabsComponent;
  let fixture: ComponentFixture<ParkTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParkTabsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParkTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
