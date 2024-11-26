import { Component, inject } from '@angular/core';

import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import { NavComponent } from '../nav/nav.component';
import { MenuComponent } from '../menu/menu.component';
import { ArticleComponent } from '../article/article.component';

@Component({
  selector: 'app-liste-article',
  standalone: true,
  imports: [ArticleComponent,NavComponent,MenuComponent],
  templateUrl: './liste-article.component.html',
  styleUrl: './liste-article.component.css'
})
export class ListeArticleComponent {
  products:Produit[]=[];
  private readonly ProduitService:ProduitService=inject(ProduitService);
  ngOnInit():void{
    this.ProduitService.getProduits().subscribe(
      data=>this.products=data
    )
  }
}
