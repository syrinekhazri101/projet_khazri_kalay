import { Component, inject, OnInit } from '@angular/core';
import { Produit } from '../../produit';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit {
  listeproduit: Produit[] = [];
  ajoutform!: FormGroup;
  private readonly formbuilder: FormBuilder = inject(FormBuilder);
  private readonly adminservice: AdminserviceService = inject(AdminserviceService);

  ngOnInit(): void {
    this.ajoutform = this.formbuilder.group({
      id: [''], // Ce champ sera calculé automatiquement
      nom: ['', Validators.required],
      photo: ['', Validators.required],
      categId: ['', Validators.required],
      fabricant: ['', Validators.required],
      prix: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]], // Valide les prix numériques
      description: ['', Validators.required],
      garantie: ['', Validators.required],
      disponibilite: ['', Validators.required],
      enStock: ['', Validators.required]
    });

    this.adminservice.getProduits().subscribe(
      (data) => {
        this.listeproduit = data;
      });

  }

  onSubmit(): void {
    const lastproduct=Number(this.listeproduit[this.listeproduit.length-1].id);
    const idprod=(lastproduct+1);
    const prod=new Produit(
      idprod,
      this.ajoutform.get('nom')?.value,
      this.ajoutform.get('photo')?.value,
      this.ajoutform.get('categId')?.value,
      this.ajoutform.get('fabricant')?.value,
      this.ajoutform.get('prix')?.value,
      this.ajoutform.get('description')?.value,
      this.ajoutform.get('garantie')?.value,
      this.ajoutform.get('disponibilite')?.value,
      this.ajoutform.get('enStock')?.value
    );
    this.adminservice.addProduct(prod).subscribe(
      data=>{
        this.listeproduit.push(prod);
        alert('Produit ajouté')
      }

    );}
    router:Router=inject(Router)

    onNavigateToHome() {
      this.router.navigate(['/listeproduit'])
      }
  onResetForm(): void {
    this.ajoutform.reset();
  }
}
