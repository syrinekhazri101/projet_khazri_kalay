import { Component, inject } from '@angular/core';
import { Produit } from '../../produit';
import { ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../../produit.service';
import { ProdComponent } from '../prod/prod.component';

@Component({
  selector: 'app-articleadmin',
  standalone: true,
  imports: [ProdComponent],
  templateUrl: './articleadmin.component.html',
  styleUrl: './articleadmin.component.css'
})
export class ArticleadminComponent {
  router:Router=inject(Router);
  onNavigateToHome() {
    this.router.navigate(['/listeproduit'])
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
