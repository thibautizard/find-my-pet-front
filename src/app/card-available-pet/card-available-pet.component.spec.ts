import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAvailablePetComponent } from './card-available-pet.component';

describe('CardAvailablePetComponent', () => {
  let component: CardAvailablePetComponent;
  let fixture: ComponentFixture<CardAvailablePetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAvailablePetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAvailablePetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
