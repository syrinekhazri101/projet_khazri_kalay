import { Component, inject } from '@angular/core';
import { ProdComponent } from '../prod/prod.component';
import { Produit } from '../../produit';
import { AdminserviceService } from '../adminservice.service';
import { NavadminComponent } from '../navadmin/navadmin.component';

@Component({
  selector: 'app-listproduit',
  standalone: true,
  imports: [ProdComponent,NavadminComponent],
  templateUrl: './listproduit.component.html',
  styleUrl: './listproduit.component.css'
})
export class ListproduitComponent {
  products:Produit[]=[];
  private readonly adminservice:AdminserviceService=inject(AdminserviceService);
  ngOnInit():void{
    this.adminservice.getProduits().subscribe(
      data=>this.products=data
    )
  }
}
