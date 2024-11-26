import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleadminComponent } from './articleadmin.component';

describe('ArticleadminComponent', () => {
  let component: ArticleadminComponent;
  let fixture: ComponentFixture<ArticleadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArticleadminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticleadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
