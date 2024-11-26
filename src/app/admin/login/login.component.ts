import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Correction : utilisation de `styleUrls`
})
export class LoginComponent {
  private readonly adminservice: AdminserviceService = inject(AdminserviceService);
  private readonly router: Router = inject(Router);

  // Définition du formulaire avec validations
  formadmin: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]), // Champs requis
    password: new FormControl('', [Validators.required]) // Champs requis
  });

  // Méthode pour se connecter
  loginadmin() {
    if (this.formadmin.valid) {
      const username = this.formadmin.get('user')?.value;
      const password = this.formadmin.get('password')?.value;

      this.adminservice.login(username, password).subscribe(data => {
        if (data) {
          localStorage.setItem('nom', username);
          localStorage.setItem('state','connected');
          this.router.navigate(['/listeproduit']);
        } else {
          alert('Nom d’utilisateur ou mot de passe incorrect.');
          localStorage.setItem('state','disconnected');
        }
      });
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  // Méthode pour réinitialiser le formulaire
  onResetForm() {
    this.formadmin.reset();
  }
}
