import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleByFabricantComponent } from './article-by-fabricant.component';

describe('ArticleByFabricantComponent', () => {
  let component: ArticleByFabricantComponent;
  let fixture: ComponentFixture<ArticleByFabricantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleByFabricantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleByFabricantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
