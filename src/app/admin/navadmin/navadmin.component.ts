import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navadmin',
  standalone: true,
  imports: [],
  templateUrl: './navadmin.component.html',
  styleUrl: './navadmin.component.css'
})
export class NavadminComponent {
  isAsideOpen = false; // État d'ouverture de l'aside
  router:Router=inject(Router);


  toggleAside() {
    this.isAsideOpen = !this.isAsideOpen; // Alterne l'état d'ouverture
  }

  changePassword() {
    this.router.navigate(['/changepassword']); // Redirige vers la page de modification du mot de passe
    this.toggleAside(); 
  }

  goToArticle() {
    this.router.navigate(['/ajoutproduit']);
    this.toggleAside(); 
  }
 
  onNavigateToArticleFabadmin(fabricant:string){
    this.router.navigate(['/articleprod',fabricant]);

  }


}
