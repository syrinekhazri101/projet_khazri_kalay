import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changepassword',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './changepassword.component.html',
  styleUrl: './changepassword.component.css'
})
export class ChangepasswordComponent {
  private readonly adminservice: AdminserviceService = inject(AdminserviceService);
  private readonly router: Router = inject(Router);


  formadmin2: FormGroup = new FormGroup({
    user: new FormControl('', [Validators.required]), 
    password: new FormControl('', [Validators.required]), 
    newpassword: new FormControl('', [Validators.required])
  });

  loginadmin() {
    if (this.formadmin2.valid) {
      const username = this.formadmin2.get('user')?.value;
      const password = this.formadmin2.get('password')?.value;
      const newpassword = this.formadmin2.get('newpassword')?.value;

      this.adminservice.changePassword(username, password).subscribe(data => {
        if (data) {
          localStorage.setItem('password', newpassword);
          this.router.navigate(['/listeproduit']);
        } else {
          alert('Nom d’utilisateur ou mot de passe incorrect.');
        }
      });
      
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  }

  // Méthode pour réinitialiser le formulaire
  onResetForm() {
    this.formadmin2.reset();
  }

}
