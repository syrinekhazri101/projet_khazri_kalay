
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
router:Router=inject(Router);
  onNavigateToArticleFab(fabricant:string){
    this.router.navigate(['/article',fabricant]);

  }

onNavigateVersPanier(){
  this.router.navigate(['/panier']);
}
onNavigateToSignup(){
  this.router.navigate(['/signup']);
}
}
