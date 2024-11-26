import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminserviceService } from '../adminservice.service';
import { Produit } from '../../produit';
import { ProduitService } from '../../produit.service';

@Component({
  selector: 'app-modifier',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './modifier.component.html',
  styleUrl: './modifier.component.css'
})
export class ModifierComponent {
  readonly formBuilder:FormBuilder=inject(FormBuilder);
  readonly  route = inject(ActivatedRoute)
  private readonly adminService:AdminserviceService=inject(AdminserviceService);
  private readonly produitService:ProduitService=inject(ProduitService);
  produit!:Produit;
  idProduct!:number;
  activatedRoute:ActivatedRoute=inject(ActivatedRoute);
  modifyForm!: FormGroup;
  router:Router=inject(Router);
  ngOnInit() {
    this.idProduct=Number(this.activatedRoute.snapshot.params["id"]);
    this.produitService.getProductById(this.idProduct).subscribe(data=>{
       this.produit = data
       this.modifyForm=new FormGroup({
        id:new FormControl(this.produit.id),
        nom:new FormControl(this.produit.nom),
        photo:new FormControl(this.produit.photo),
        fabricant:new FormControl(this.produit.fabricant),
        prix:new FormControl(this.produit.prix),
        description:new FormControl(this.produit.description),
        garantie:new FormControl(this.produit.garantie),
        Disponibilité:new FormControl(this.produit.disponibilite),
        enStock:new FormControl(this.produit.enStock),
      })

    })

  }
  onSubmit(){
    this.adminService.updateProduct(this.idProduct,this.modifyForm?.value).subscribe(data=>{
      console.log(data);
      this.router.navigate( ['/listeproduit']);
    });



  }
}
