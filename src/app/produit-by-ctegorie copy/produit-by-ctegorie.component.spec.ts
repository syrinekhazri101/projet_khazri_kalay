import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitByCtegorieComponent } from './produit-by-ctegorie.component';

describe('ProduitByCtegorieComponent', () => {
  let component: ProduitByCtegorieComponent;
  let fixture: ComponentFixture<ProduitByCtegorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProduitByCtegorieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitByCtegorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
