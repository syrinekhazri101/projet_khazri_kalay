import { Component, inject } from '@angular/core';
import { Produit } from '../../produit';
import { ProduitService } from '../../produit.service';
import { ActivatedRoute } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-detailprod',
  standalone: true,
  imports: [NgClass],
  templateUrl: './detailprod.component.html',
  styleUrl: './detailprod.component.css'
})
export class DetailprodComponent {
  produit!:Produit;
  idProduct!:number;
  private ProduitService:ProduitService=inject(ProduitService);
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  ngOnInit(){
    this.idProduct=Number(this.activatedRoute.snapshot.params["id"]);
    this.ProduitService.getProductById(this.idProduct).subscribe({
      next: (data) => this.produit = data,

    })
  }
}
