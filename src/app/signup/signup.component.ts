
import { formatCurrency } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
ProduitService:ProduitService=inject(ProduitService)
  compteForm:FormGroup=new FormGroup({
    nom_complet:new FormControl(),
    adresse_email:new FormControl(),
    mot_de_passe:new FormControl(),
    confirmPassword:new FormControl(),
  })
  loginForm:FormGroup=new FormGroup({
    name:new FormControl(),
    password:new FormControl(),
  })
  router:Router=inject(Router);
onSubmit() {
if(this.compteForm.get('mot_de_passe')?.value===this.compteForm.get('confirmPassword')?.value){
  this.ProduitService.register(this.compteForm.value).subscribe({
    next: () => {
      alert('Inscription réussie !') ;
      this.compteForm.reset();
    },
    error: (err) => {
      console.error('Erreur lors de l’inscription:', err);
    }
  });
}
else{
  alert('password inccorect')
}
}
login(){
 (this.ProduitService.login(this.loginForm.get('name')?.value,this.loginForm.get('password')?.value)).subscribe(data=>{
  if(data){
    localStorage.setItem('nom',this.loginForm.get('name')?.value);
    this.router.navigate(['/home']);
  }
  else{
    alert('login or password incorrect');
  }
 }
 )
 }

  connexion:boolean=true;
  connecter(){
    this.connexion= !(this.connexion);
  }
}


