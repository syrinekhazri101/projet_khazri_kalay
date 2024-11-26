import { ProduitService } from './../produit.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, Inject, inject } from '@angular/core';
import { Produit } from '../produit';
import { ArticleComponent } from '../article/article.component';


@Component({
  selector: 'app-article-by-fabricant',
  standalone: true,
  imports: [ArticleComponent],
  templateUrl: './article-by-fabricant.component.html',
  styleUrl: './article-by-fabricant.component.css'
})
export class ArticleByFabricantComponent {
  router:Router=inject(Router);
onNavigateToHome() {
this.router.navigate(['/home'])
}
fabricant!:string;
ListeProduit:Produit[]=[];
produitService:ProduitService=inject(ProduitService)
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);

ngOnInit():void{
  this.fabricant=this.activatedRoute.snapshot.params["fabricant"];
  this.fabricant.charAt(0).toUpperCase();
  this.produitService.getProduitByFabricant(this.fabricant).subscribe({
    next: (data) => this.ListeProduit = data,
  })
}

}
