import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from '../../produit';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [],
  templateUrl: './prod.component.html',
  styleUrl: './prod.component.css'
})
export class ProdComponent {
  router:Router=inject(Router);
  private readonly adminservice:AdminserviceService=inject(AdminserviceService);
  supprimer(id: number) {
    this.adminservice.deleteProduct(id).subscribe(data=>{
      console.log("felicitation deleted");
      location.reload();
    })
    }
    OnNavigateToModify(id:number){
      this.router.navigate(['/modifierproduit',id])
    }
OnNavigateToDetailprod(id:number){
  this.router.navigate(['/detailproduit',id])
}


@Input('produit')prod!:Produit;
@Input() id!: number;
}
