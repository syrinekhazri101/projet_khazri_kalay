import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicprodComponent } from './publicprod.component';

describe('PublicprodComponent', () => {
  let component: PublicprodComponent;
  let fixture: ComponentFixture<PublicprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublicprodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
