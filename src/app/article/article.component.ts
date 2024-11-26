import { Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from './../produit.service';
import { Component, inject, Input } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { UnitePipe } from '../unite.pipe';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [UpperCasePipe,UnitePipe],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {
  router:Router=inject(Router);

OnNavigateToDetail(id:number){
  this.router.navigate(['/details',id])
}
@Input('produit')prod!:Produit;
}
