import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { ListproduitComponent } from './admin/listproduit/listproduit.component';
import { ChangepasswordComponent } from './admin/changepassword/changepassword.component';
import { AjouterComponent } from './admin/ajouter/ajouter.component';
import { ModifierComponent } from './admin/modifier/modifier.component';
import { ArticleByFabricantComponent } from './article-by-fabricant/article-by-fabricant.component';
import { SignupComponent } from './signup/signup.component';
import { ListeArticleComponent } from './liste-article/liste-article.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ProduitByCtegorieComponent } from './produit-by-ctegorie copy/produit-by-ctegorie.component';
import { PublicprodComponent } from './publicprod/publicprod.component';
import { ProdComponent } from './admin/prod/prod.component';
import { authGuard } from './auth.guard';
import { DetailprodComponent } from './admin/detailprod/detailprod.component';
import { ArticleadminComponent } from './admin/articleadmin/articleadmin.component';


export const routes: Routes = [
  {path: '', component:PublicprodComponent,
    children:[
      {path:'Produit/:categorie',title:'ProduitByCategorie' ,component:ProduitByCtegorieComponent},
      {path:'home',title:'home',component:ListeArticleComponent},
      {path:'details/:id',title:'details',component:DetailProduitComponent}
    ]
  },


  {path:'article/:fabricant',title:'articleByFabricant',component:ArticleByFabricantComponent},
  {path:'articleprod/:fabricant',title:'articleByFabricant',component:ArticleadminComponent},
  {path:'signup',title:'signup',component:SignupComponent},


  {path:'login',title:'Login',component:LoginComponent,},

  {path:'admin',title:'admin',component:ListproduitComponent,canActivate:[authGuard]},

      {path:'listeproduit',title:'produits',component:ListproduitComponent},
      {path:'detailproduit/:id',title:'detailproduit',component:DetailprodComponent},
      {path:'ajoutproduit',title:'ajoutproduit',component:AjouterComponent},
      {path:'produit',title:'produits',component:ProdComponent},
      {path:'modifierproduit/:id',title:'modifierproduit',component:ModifierComponent},

      {path:'changepassword',title:'changepassword',component:ChangepasswordComponent},

      {path:'detailproduit/:id',title:'detailproduit',component:DetailprodComponent},


  {path:'',redirectTo:'home',pathMatch:'full'}
];
