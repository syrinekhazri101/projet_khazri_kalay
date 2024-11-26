import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { ProduitService } from '../produit.service';
import { Categorie } from '../categorie';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  categorie:Categorie[]=[];
ActivatedRoute:ActivatedRoute=inject(ActivatedRoute);
ProduitService:ProduitService=inject(ProduitService)
ngOnInit(): void {
  this.router.navigate(['/home'])
  this.ProduitService.getcategorie().subscribe(
    data=>this.categorie=data
  )

}
router:Router=inject(Router)
onNavigateToHome(){
  this.router.navigate(['/home']);
}




}
